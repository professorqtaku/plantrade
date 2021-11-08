package com.server.backend.controllers;

import com.server.backend.entities.Bid;
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

  @PostMapping("/bid")
  public ResponseEntity<Bid> createBid(@RequestBody Map values) {
    Bid bid = bidService.createBid(values);
    socketModule.emit("bid", bid);
    
    if (bid != null) {
      return ResponseEntity.ok(bid);
    } else {
      return ResponseEntity.badRequest().build();
    }

  }

}
