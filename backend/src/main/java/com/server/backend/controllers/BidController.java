package com.server.backend.controllers;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Bid;
import com.server.backend.services.AuctionService;
import com.server.backend.services.BidService;
import com.server.backend.springsocket.SocketModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class BidController {

  @Autowired
  private BidService bidService;

  @Autowired
  private SocketModule socketModule;

  @Autowired
  private AuctionService auctionService;

  @PostMapping("/bid")
  public ResponseEntity<Bid> createBid(@RequestBody Map values) {
    Auction auction = auctionService.getAuctionById((long) (int) values.get("auctionId")).get();
    var secondHighestAuctionId = bidService.getHighestBid(auction.getId()).getUser().getId();
    Bid bid = bidService.createBid(values);
    socketModule.emit("notification", secondHighestAuctionId);
    socketModule.emit("bid", bid);

    if (bid != null) {
      return ResponseEntity.ok(bid);
    } else {
      return ResponseEntity.badRequest().build();
    }

  }

  @GetMapping("/{id}/highest-bid")
  public ResponseEntity<Bid> getHighestBid(@PathVariable long id) {
    Bid bid = bidService.getHighestBid(id);

    if (bid != null) {
      return ResponseEntity.ok(bid);
    } else {
      return ResponseEntity.noContent().build();
    }
  }

}
