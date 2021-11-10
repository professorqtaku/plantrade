package com.server.backend.services;

import com.server.backend.entities.*;
import com.server.backend.repositories.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

@Service
public class AuctionService {

    @Autowired
    private AuctionRepository auctionRepository;

    @Autowired
    private ImageService imageService;

    @Autowired
    private UserService userService;

    public Pageable getPageable(Integer page, String sort, Specification specification){
        // How page and size works in Pageable:
        // at page 0 (first page), size should be the number of items you want to show
        // at page 1, size should be the same as at page 0 because it counts it as offset
        // aka if size is 3 at page 1, it will show the next 3 items (ex id 4 to 6)
        // at page 2 and so on, size should add the number of elements size was at page 0,
        // aka if size is 3 at page 0, size should be 6 at page 2, size 9 at page 3, size 12 at page 4 etc
        var offset = 5; // will be added on as scrolling
        var size = 5; // the constant size of elements showing at a time
        if(page > 1){
            offset *= page;
        }
        long counter = auctionRepository.count(specification); // how many elements in total
        var sortBy = Objects.equals(sort, "asc") ? Sort.Order.asc("endDate")
                : Objects.equals(sort, "desc") ? Sort.Order.desc("endDate") : Sort.Order.asc("id");
        if(page > Math.floor((double)counter / size)){
            return null;
        }
        return PageRequest.of(page, offset, Sort.by(sortBy));
    }

    public void changeStatusOnAuctions(List<Auction> listToClean){
        Date date = new Date();
        for(Auction auction : listToClean) {
            if(auction.getEndDate().getTime() < date.getTime()){
                if(auction.getBids().size() > 0){
                    auction.setStatus(Status.SOLD);
                } else {
                    auction.setStatus(Status.NOT_SOLD);
                }
                auctionRepository.save(auction);
            }
        }
    }
    
    public Auction createAuction(Auction auction, List<Category> categories, List<MultipartFile> files) {
        User user = userService.findCurrentUser();
        if (user == null || auction.getTitle().length() > 20) {
            return null;
        }
        Date date = new Date();
        long inputDate = auction.getEndDate().getTime();
        if(Long.toString(inputDate).length() < 13) {
            inputDate *= 1000;
            auction.setEndDate(new Date(inputDate));
        }
        long oneDayInMillis = date.getTime() + 86400000L;
        long oneMonthInMillis = date.getTime() + 2592000000L;

        if (inputDate < oneDayInMillis || inputDate > oneMonthInMillis) {
            return null;
        }
        auction.setStatus(Status.OPEN);
        auction.setHost(user);
        auction.setCategories(categories);
        Auction savedAuction = auctionRepository.save(auction);

        if(files != null) {
            List<String> urls = imageService.saveFiles(files);
            urls.forEach(url -> {
                Image image = Image.builder()
                        .path(url)
                        .auction(savedAuction)
                        .build();
                imageService.save(image);
            });
        }
        return savedAuction;
    }

    public List<Auction> findAll(Specification<Auction> specification, Integer page, String sort) {
        Pageable pageable = getPageable(page, sort, specification);
        if(pageable == null){
            return null;
        }
        List<Auction> list = auctionRepository.findAll(specification, pageable).getContent();
        changeStatusOnAuctions(list);
        return auctionRepository.findAll(specification, pageable).getContent();
    }

    public Optional<Auction> getAuctionById(long id) {
        return auctionRepository.findById(id);
    }

    public List<Auction> getAuctionsByCurrentUser() {
        User user = userService.findCurrentUser();
        if(user == null) {
            return null;
        }
        return auctionRepository.findByHost(user);
    }

    public List<Auction> getWonAuctionsByCurrentUser() {
        User user = userService.findCurrentUser();
        if(user == null) {
            return null;
        }
        return auctionRepository.findByWinner(user);
    }

}
