package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.User;
import com.server.backend.entities.Status;
import com.server.backend.repositories.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AuctionService {

    @Autowired
    private AuctionRepository auctionRepository;

    public Auction createAuction(Auction auction, User user) {
        Date date = new Date();
        var inputDate = auction.getEndDate().getTime();
        if(Long.toString(inputDate).length() < 13) {
            inputDate *= 1000;
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

    public List<Auction> getAllAuctions() {
        return auctionRepository.findAll();
    }

    public Optional<Auction> getAuctionById(long id) {
        return auctionRepository.findById(id);
    }

    public List<Auction> getAuctionsByCurrentUser(User user) {

        return auctionRepository.findByHost(user);
    }
}
