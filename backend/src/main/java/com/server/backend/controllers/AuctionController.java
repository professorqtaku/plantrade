package com.server.backend.controllers;

import com.server.backend.services.AuctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest/auctions")
public class AuctionController {

    @Autowired
    private AuctionService auctionService;
}
