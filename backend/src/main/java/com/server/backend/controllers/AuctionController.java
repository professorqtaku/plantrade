package com.server.backend.controllers;

import com.server.backend.entities.Auction;
import com.server.backend.services.AuctionService;
import jdk.jshell.Snippet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest/auctions")
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    @GetMapping
    public ResponseEntity<List<Auction>> getAllAuctions() {
        List<Auction> auctions = auctionService.getAuctions();
        if(auctions.size() > 0) {
            return ResponseEntity.ok(auctions);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Auction>> getAuctionById(@PathVariable long id) {
        Optional<Auction> auction = auctionService.getAuctionById(id);
        if(auction.isPresent()) {
            return ResponseEntity.ok(auction);
        } else {
            return ResponseEntity.noContent().build();
        }
    }

}
