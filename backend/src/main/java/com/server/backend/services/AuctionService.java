package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Status;
import com.server.backend.repositories.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuctionService {

    @Autowired
    private AuctionRepository auctionRepository;

    public Auction createAuction(Auction auction){
        auction.setStatus(Status.OPEN);
        return auctionRepository.save(auction);
    }
}
