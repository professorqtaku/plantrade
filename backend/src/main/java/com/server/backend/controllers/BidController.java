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

@RestController
@RequestMapping("/api")
public class BidController {

  @Autowired
  private BidService bidService;

  @Autowired
  private SocketModule socketModule;


  @PostMapping("/bid")
  public ResponseEntity<Bid> createBid(@RequestBody Map values) {
    try {
      Bid bid = bidService.createBid(values);
      if (bid != null) {
        socketModule.emit("bid", bid);
        return ResponseEntity.ok(bid);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    return ResponseEntity.badRequest().build();
  }

  @GetMapping("/{id}/highest-bid")
  public ResponseEntity<Bid> getHighestBid(@PathVariable long id) {
    try {
      Bid bid = bidService.getHighestBid(id);
      if (bid != null) {
        return ResponseEntity.ok(bid);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    return ResponseEntity.noContent().build();
  }

}
