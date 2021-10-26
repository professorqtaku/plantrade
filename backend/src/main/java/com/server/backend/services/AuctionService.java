package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.User;
import com.server.backend.entities.Status;
import com.server.backend.repositories.AuctionRepository;
import com.server.backend.specifications.AuctionSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class AuctionService {

    @Autowired
    private AuctionRepository auctionRepository;

    public List<Auction> getAllAuctions() {
        return auctionRepository.findAll();
    }

    public Optional<Auction> getAuctionById(long id) {
        return auctionRepository.findById(id);
    }

    public List<Auction> getAuctionsByCurrentUser(User user) {

        return auctionRepository.findByHost(user);
    }
    public Auction createAuction(Auction auction, User user){
        auction.setStatus(Status.OPEN);
        auction.setHost(user);
        return auctionRepository.save(auction);
    }

    public List<Auction> getAuctionByTitle(String title) {
        List<String> words = Arrays.asList(title.split(" "));
        return getAuctionsWhereTitleContainsAnyWord(words);
    }

    public List<Auction> getAuctionsWhereTitleContainsAnyWord(List<String> words) {
        if(words.isEmpty()) {
            return Collections.emptyList();
        }

        Specification<Auction> specification = null;
        for(String word : words) {
            Specification<Auction> wordSpecification = AuctionSpecification.titleContains(word);
            if (specification == null) {
                specification = wordSpecification;
            } else {
                specification = specification.or(wordSpecification);
            }
        }

        return auctionRepository.findAll(specification);
    }
}
