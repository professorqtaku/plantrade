package com.server.backend.services;

import com.server.backend.entities.*;
import com.server.backend.repositories.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public List<Auction> getAllOpenAuctions(Status status) {
        List<Auction> openAuctions = auctionRepository.findByStatus(status);
        Date date = new Date();
        for(Auction auction : openAuctions) {
            if(auction.getEndDate().getTime() < date.getTime()){
                if(auction.getBids().size() > 0){
                    auction.setStatus(Status.SOLD);
                } else {
                    auction.setStatus(Status.NOT_SOLD);
                }
                auctionRepository.save(auction);
            }
        }
        return auctionRepository.findByStatus(status);
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

    public List<Auction> findAll(Specification<Auction> specification) {
        return auctionRepository.findAll(specification);
    }

    public Optional<Auction> getAuctionById(long id) {
        return auctionRepository.findById(id);
    }

    public Auction getAuctionByIdOrderByBidsDesc(Auction auction) {
            auction.getBids().sort((Bid b1, Bid b2) -> (int) (b2.getPrice() - b1.getPrice()));
            return auction;
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
