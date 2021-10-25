package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Status;
import com.server.backend.repositories.AuctionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class AuctionService {

    @Autowired
    private AuctionRepository auctionRepository;

    public Auction createAuction(Auction auction){
        Date date = new Date();
        var inputDate = auction.getEndDate().getTime();
        Long oneDayinMillis = date.getTime() + 86400000;
        Long oneMonthInMillis = date.getTime() + 2592000000L;

        if(inputDate < oneDayinMillis || inputDate > oneMonthInMillis){

        }

        auction.setStatus(Status.OPEN);
        return auctionRepository.save(auction);
    }
}
