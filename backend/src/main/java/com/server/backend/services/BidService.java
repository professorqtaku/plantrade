package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Bid;
import com.server.backend.entities.User;
import com.server.backend.repositories.AuctionRepository;
import com.server.backend.repositories.BidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.persistence.OneToOne;
import java.util.Date;
import java.util.Map;
import java.util.Optional;

@Service
public class BidService {

  @Autowired
  private BidRepository bidRepository;

  @Autowired
  private UserService userService;

  @Autowired
  private AuctionService auctionService;

  public Boolean validateUser(User user) {
    return user.getUsername().equals(SecurityContextHolder.getContext().getAuthentication().getName());
  }

  public Boolean isOwner(User user, Auction auction) {
    try {
      return user.getId() == auction.getHost().getId();
    } catch(Exception e){
      e.printStackTrace();
    }
    return null;
  }

  public Boolean validateBid(Auction auction, int bidPrice) {
    int index = auction.getBids().size();
    double latestPrice = 0;
    try{
      latestPrice = auction.getBids().get(index - 1).getPrice();
    } catch (Exception e){
      e.printStackTrace();
    }

    if (auction.getStartPrice() < bidPrice && latestPrice < bidPrice){
      // price placed by user must be higher than both startPrice and latestPrice
      return true;
    } else if (auction.getStartPrice() > bidPrice || latestPrice > bidPrice) {
      // if startPrice or latestPrice is higher than bidPrice
      return false;
    } else {
      // if list of bids is empty and bidPrice is higher than startPrice return true
      // otherwise return false
      return auction.getBids().isEmpty() && auction.getStartPrice() < bidPrice;
    }

  }

  public Boolean validateTime(Auction auction, long time) {
    // validate so endDate has not passed
    return auction.getEndDate().getTime() > time;
  }

  public Bid createBid(Map values) {
    User user =  userService.getUserById((long) (int) values.get("userId")).get();
    Auction auction = auctionService.getAuctionById((long) (int) values.get("auctionId")).get();
    // validate user, bid price and time before creating a new bid

    if (isOwner(user, auction)) {
      return null;
    } else if (validateUser(user) && validateBid(auction, (int) values.get("price")) && validateTime(auction, (long) values.get("createdDate"))){
      try{
        Bid bid = Bid.builder()
                .user(user)
                .auction(auction)
                .price((int) values.get("price"))
                .createdDate(new Date((long) values.get("createdDate")))
                .build();

        auction.addBid(bid);
        return bidRepository.save(bid);
      } catch(Exception e) {
        e.printStackTrace();
      }
    }
    return null;
  }

  public Optional<Bid> getHighestBid(long id) {
    try {
      Bid bid = bidRepository.findTopByAuctionIdOrderByPriceDesc(id);
      return Optional.of(bid);
    } catch (Exception e) {
      e.printStackTrace();
      return Optional.empty();
    }
  }
}
