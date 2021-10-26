package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.User;
import com.server.backend.entities.Status;
import com.server.backend.repositories.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuctionService {

    @Autowired
    private AuctionRepository auctionRepository;

    public List<Auction> getAllOpenAuctions(Status status) {
        return auctionRepository.findByStatus(status);
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
}
