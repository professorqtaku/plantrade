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

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

  @Autowired
  private NotificationService notificationService;

  @GetMapping
  public ResponseEntity<List<Notification>> getNotificationsByCurrentUser() {
    try {
      List<Notification> notifications = notificationService.getNotificationsByUser();
      if (notifications != null) {
        return ResponseEntity.ok(notifications);
      }
    } catch (Exception e) {
      System.out.println("---HERE---");
      System.out.println(e);
      e.printStackTrace();
    }
    return ResponseEntity.status(403).build();
  }

  @PutMapping("/update/is-read/all")
  public ResponseEntity<List<Notification>> updateIsRead() {
    try {
      List<Notification> updatedNotifications = notificationService.updateIsRead();
      if (updatedNotifications != null) {
        return ResponseEntity.ok(updatedNotifications);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    return ResponseEntity.status(403).build();
  }

}
