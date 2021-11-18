package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Bid;
import com.server.backend.entities.User;
import com.server.backend.repositories.BidRepository;
import com.server.backend.springsocket.SocketModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Map;

@Service
public class BidService {

  @Autowired
  private BidRepository bidRepository;

  @Autowired
  private UserService userService;

  @Autowired
  private AuctionService auctionService;

  @Autowired
  private NotificationService notificationService;

  @Autowired
  private SocketModule socketModule;

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
    double currentPrice = auction.getStartPrice();

    Bid highestBid = getHighestBid(auction.getId());
    if (highestBid != null) {
      currentPrice = highestBid.getPrice();
    }

    if (auction.getBids().isEmpty()) {
      return bidPrice >= currentPrice;
    }
    return bidPrice > currentPrice;
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
    } else if (validateUser(user)
            && validateBid(auction, (int) values.get("price"))
            && validateTime(auction, (long) values.get("createdDate"))) {
      Bid bid = Bid.builder()
              .user(user)
              .auction(auction)
              .price((int) values.get("price"))
              .createdDate(new Date((long) values.get("createdDate")))
              .build();

      User secondHighestAuctionUser = null;

      if (auction.getBids().size() > 0){
        User highestBidder = getHighestBid(auction.getId()).getUser();
        if(highestBidder != user) {
          secondHighestAuctionUser = highestBidder;
        }
      }

      notificationService.sendNotifications(auction, secondHighestAuctionUser, (int) values.get("price"));
      auction.addBid(bid);
      return bidRepository.save(bid);
    }
    return null;
  }

  public Bid getHighestBid(long id) {
    return bidRepository.findTopByAuctionIdOrderByPriceDesc(id);
  }
}
