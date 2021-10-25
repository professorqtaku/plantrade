package com.server.backend.services;

import com.server.backend.repositories.BidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BidService {

  @Autowired
  private BidRepository bidRepository;

}
