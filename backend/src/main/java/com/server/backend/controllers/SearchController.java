package com.server.backend.controllers;

import com.server.backend.entities.Auction;
import com.server.backend.services.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/auctions")
public class SearchController {
    @Autowired
    private AuctionService auctionService;

    @GetMapping("/search")
    public ResponseEntity<List<Auction>> getAuctionsByTitle(@RequestParam String title) {
        List<Auction> auctions = auctionService.getAuctionByTitle(title);
        if (auctions.size() > 0) {
            return ResponseEntity.ok(auctions);
        }
        else {
            return ResponseEntity.noContent().build();
        }
    }
}
