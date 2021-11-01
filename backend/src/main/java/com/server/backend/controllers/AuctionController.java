package com.server.backend.controllers;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Status;
import com.server.backend.services.AuctionService;
import com.server.backend.services.UserService;
import jdk.jshell.Snippet;
import net.bytebuddy.asm.Advice;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Column;

@RestController
@RequestMapping("/rest/auctions")
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<Auction>> getAllOpenAuctions() {
        List<Auction> auctions = auctionService.getAllOpenAuctions(Status.OPEN);
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

    @PostMapping
    public ResponseEntity<Auction> createAuction(@RequestBody Auction auction){
        var user = userService.findCurrentUser();
        if(user != null) {
            Auction savedAuction = auctionService.createAuction(auction, user);
            if(savedAuction != null) {
                return ResponseEntity.ok(savedAuction);
            } else {
                return ResponseEntity.badRequest().build();
            }
        } else {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/user")
    public ResponseEntity<List<Auction>> getAuctionsByCurrentUser() {
        var user = userService.findCurrentUser();
        if(user != null){
            List<Auction> auctions = auctionService.getAuctionsByCurrentUser(user);
            if(auctions.size() > 0){
                return ResponseEntity.ok(auctions);
            } else {
                return ResponseEntity.noContent().build();
            }
        } else {
            return ResponseEntity.noContent().build();
        }

    }

    @GetMapping("/won")
    public ResponseEntity<List<Auction>> getWonAuctionsByCurrentUser() {
        var user = userService.findCurrentUser();
        if(user != null){
            List<Auction> auctions = auctionService.getWonAuctionsByCurrentUser(user);
            if(auctions.size() > 0) {
                return ResponseEntity.ok(auctions);
            } else {
                return ResponseEntity.noContent().build();
            }
        } else {
            return ResponseEntity.noContent().build();
        }
    }

}
