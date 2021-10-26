package com.server.backend.controllers;

import com.server.backend.entities.Bid;
import com.server.backend.services.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class BidController {

  @Autowired
  private BidService bidService;

  @PostMapping("/auctions/{id}")
  public Bid createBid(@RequestBody Map values){
    return bidService.createBid(values);
  }

}
