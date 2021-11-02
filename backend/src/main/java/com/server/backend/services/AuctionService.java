package com.server.backend.services;

import com.server.backend.entities.*;
import com.server.backend.repositories.AuctionRepository;
import com.server.backend.repositories.ImageRepository;
import com.server.backend.specifications.AuctionSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Service
public class AuctionService {


    @Autowired
    private AuctionRepository auctionRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private UploadImagesService uploadImagesService;
    private SearchService searchService;

    public List<Auction> getAllOpenAuctions(Status status) {
        List<Auction> openAuctions = auctionRepository.findByStatus(status);
        Date date = new Date();
        for(var auction : openAuctions) {
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
    
    public Auction createAuction(Auction auction, List<Category> categories, List<MultipartFile> files, User user) {
        Date date = new Date();
        var inputDate = auction.getEndDate().getTime();
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
            var urls = uploadImagesService.saveFiles(files);
            urls.forEach(url -> {
                Image image = Image.builder()
                        .path(url)
                        .auction(savedAuction)
                        .build();
                imageRepository.save(image);
            });
        }
        return savedAuction;
    }

    public Optional<Auction> getAuctionById(long id) {
        return auctionRepository.findById(id);
    }

    public List<Auction> getAuctionsByCurrentUser(User user) {
        return auctionRepository.findByHost(user);
    }

    public List<Auction> getAuctionByTitleAndStatusAndCategory(String title, Status status, String categoryName) {
        try{
            title = URLDecoder.decode(title, StandardCharsets.UTF_8.name());
            List<String> words = Arrays.asList(title.split(" "));
            List<String> categoryNames = new ArrayList<>();

            if (categoryName != null) {
                categoryName = URLDecoder.decode(categoryName, StandardCharsets.UTF_8.name());
                categoryNames = Arrays.asList(categoryName.split(" "));
            }

            return getAuctionByTitleAndStatusAndCategory(words, status, categoryNames);
        } catch (UnsupportedEncodingException e) {
            return null;
        }
    }

    public List<Auction> getAuctionByTitleAndStatusAndCategory(List<String> words, Status status, List<String> categoryNames) {
        if(words.isEmpty()) {
            return Collections.emptyList();
        }

        Specification<Auction> wordSpecification = searchService.getTitleSpecification(words);
        Specification<Auction> statusSpecification = searchService.getStatusSpecification(status);
        Specification<Auction> categorySpecification = searchService.getCategorySpecification(categoryNames);

        Specification<Auction> totalSpecification = Specification.where(wordSpecification).and(statusSpecification);

        if (categorySpecification != null) {
            totalSpecification = totalSpecification.and(categorySpecification);
        }

        return auctionRepository.findAll(totalSpecification);
    }

}
