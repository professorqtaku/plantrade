package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.User;
import com.server.backend.entities.Status;
import com.server.backend.repositories.AuctionRepository;
import com.server.backend.specifications.AuctionSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Service
public class AuctionService {

    @Autowired
    private AuctionRepository auctionRepository;

    @Autowired
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
    
    public Auction createAuction(Auction auction, User user) {
        Date date = new Date();
        var inputDate = auction.getEndDate().getTime();
        if(Long.toString(inputDate).length() < 13) {
            inputDate *= 1000;
            auction.setEndDate(new Date(inputDate));
        }
        Long oneDayinMillis = date.getTime() + 86400000;
        Long oneMonthInMillis = date.getTime() + 2592000000L;

        if (inputDate < oneDayinMillis || inputDate > oneMonthInMillis) {
            return null;
        }
        auction.setStatus(Status.OPEN);
        auction.setHost(user);
        return auctionRepository.save(auction);

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
