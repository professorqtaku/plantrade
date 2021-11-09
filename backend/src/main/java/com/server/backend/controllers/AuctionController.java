package com.server.backend.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.server.backend.entities.Auction;
import com.server.backend.entities.Category;
import com.server.backend.entities.Status;
import com.server.backend.services.AuctionService;
import com.server.backend.services.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/rest/auctions")
public class AuctionController {

    @Autowired
    private AuctionService auctionService;

    @GetMapping
    public ResponseEntity<List<Auction>> getAllOpenAuctions(@RequestParam(value = "page") Integer page) {
        List<Auction> auctions = auctionService.getAllOpenAuctions(Status.OPEN, page);
        if(auctions == null) {
            return ResponseEntity.noContent().build();
        } else if(auctions.size() > 0) {
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
    public ResponseEntity<Auction> createAuction(
            @RequestParam(value = "auction") String _auction,
            @RequestParam(value = "categories") String _categories,
            @RequestParam(value = "files", required = false) List<MultipartFile> files
    ){
        ObjectMapper mapper = new ObjectMapper();
        try {
            Auction auction = mapper.readValue(_auction, Auction.class);
            List<Category> categories = mapper.readValue(_categories, mapper.getTypeFactory().constructCollectionType(List.class, Category.class));
            Auction savedAuction = auctionService.createAuction(auction, categories, files);

            if(savedAuction != null) {
                return ResponseEntity.ok(savedAuction);
            } else {
                return ResponseEntity.badRequest().build();
            }

        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        //if we get all the way here something went really wrong
        return ResponseEntity.badRequest().build();
    }
    
    @GetMapping("/user")
    public ResponseEntity<List<Auction>> getAuctionsByCurrentUser() {
        try {
            List<Auction> auctions = auctionService.getAuctionsByCurrentUser();
            if (auctions != null && auctions.size() > 0) {
                return ResponseEntity.ok(auctions);
            } else {
                return ResponseEntity.noContent().build();
            }
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/won")
    public ResponseEntity<List<Auction>> getWonAuctionsByCurrentUser() {
        try {
            List<Auction> auctions = auctionService.getWonAuctionsByCurrentUser();
            if (auctions != null && auctions.size() > 0) {
                return ResponseEntity.ok(auctions);
            } else {
                return ResponseEntity.noContent().build();
            }
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

}
