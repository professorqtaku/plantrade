package com.server.backend.controllers;

import com.server.backend.services.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class BidController {

  @Autowired
  private BidService bidService;

}
