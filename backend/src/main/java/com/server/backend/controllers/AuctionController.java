package com.server.backend.controllers;

import com.server.backend.entities.Auction;
import com.server.backend.services.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    @PostMapping("/auctions")
    public Auction createAuction(@RequestBody Auction auction){ return auctionService.createAuction(auction); }
}
