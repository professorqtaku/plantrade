package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Notification;
import com.server.backend.entities.User;
import com.server.backend.repositories.NotificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class NotificationService {

  @Autowired
  private NotificationRepository notificationRepository;

  public ResponseEntity<Notification> createNotificationForHost(Auction auction) {
    try{
      Notification notification = Notification.builder()
              .auction(auction)
              .user(auction.getHost())
              .message("har fått ett nytt bud")
              .isRead(false)
              .build();

      notificationRepository.save(notification);

      return ResponseEntity.ok(notification);
    } catch (Exception e) {
      e.printStackTrace();
    }
    return ResponseEntity.badRequest().build();
  }

  public ResponseEntity<Notification> createNotificationForUser(User user, Auction auction) {
    try{
      Notification notification = Notification.builder()
              .auction(auction)
              .user(user)
              .message("")
              .isRead(false)
              .build();

      notificationRepository.save(notification);

      return ResponseEntity.ok(notification);
    } catch (Exception e) {
      e.printStackTrace();
    }
    return ResponseEntity.badRequest().build();
  }
}
