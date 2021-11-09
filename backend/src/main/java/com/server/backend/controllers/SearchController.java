package com.server.backend.controllers;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Category;
import com.server.backend.entities.Status;
import com.server.backend.services.AuctionService;
import com.server.backend.services.SearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/auctions")
public class SearchController {

    @Autowired
    private SearchService searchService;

    @GetMapping("/search")
    public ResponseEntity<List<Auction>> getAuctionsByTitle(
            @RequestParam String title,
            @RequestParam(required = false) Status status,
            @RequestParam(required = false) String category,
            @RequestParam(required = false, value = "page") Integer page,
            @RequestParam(required = false, value = "sort") String sort
    ) {
        System.out.println("what is page" + page);
        System.out.println("what is sort" + sort);
        try {
            List<Auction> auctions = searchService.getAuctionByTitleAndStatusAndCategory(title, status, category, page, sort);
            if(auctions == null){
                return ResponseEntity.noContent().build();
            }
            if (auctions.size() > 0) {
                return ResponseEntity.ok(auctions);
            } else {
                return ResponseEntity.noContent().build();
            }
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.badRequest().build();
        }
    }
}
