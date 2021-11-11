package com.server.backend.controllers;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Notification;
import com.server.backend.entities.User;
import com.server.backend.services.AuctionService;
import com.server.backend.services.NotificationService;
import com.server.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

  @Autowired
  private NotificationService notificationService;
  @Autowired
  private AuctionService auctionService;
  @Autowired
  private UserService userService;

  @GetMapping
  public ResponseEntity<List<Notification>> getNotificationsByCurrentUser() {
    try {
      List<Notification> notifications = notificationService.getNotificationsByUser();
      if (notifications != null) {
        return ResponseEntity.ok(notifications);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    return ResponseEntity.noContent().build();
  }

  @GetMapping("/test")
  public ResponseEntity<Boolean> sendNotificationToMyself() {
    try {
      Auction auction = auctionService.getAuctionById(250).get();
      User me = userService.getUserById(3).get();
      notificationService.createNotificationForUser(me, auction);
      return ResponseEntity.ok(true);
    } catch (Exception e) {
      e.printStackTrace();
    }
    return ResponseEntity.noContent().build();
  }

}
