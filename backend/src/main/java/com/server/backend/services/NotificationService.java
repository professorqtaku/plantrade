package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Bid;
import com.server.backend.entities.Notification;
import com.server.backend.entities.User;
import com.server.backend.repositories.NotificationRepository;
import com.server.backend.springsocket.SocketModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NotificationService {

  @Autowired
  private NotificationRepository notificationRepository;

  @Autowired
  private UserService userService;

  @Autowired
  private SocketModule socketModule;

  public void sendNotifications(Auction auction, User user, int price) {
    createNotificationForHost(auction, price);
    if (user != null) {
      createNotificationForUser(auction, user);
    }
  }

  public void createNotificationForHost(Auction auction, int price) {
    Notification notification = Notification.builder()
            .auction(auction)
            .user(auction.getHost())
            .message("har fått ett nytt bud: " + price + " SEK")
            .isRead(false)
            .build();

    notificationRepository.save(notification);
    socketModule.emit("notification", notification);
  }

  public void createNotificationForUser(Auction auction, User user) {
      Notification notification = Notification.builder()
              .auction(auction)
              .user(user)
              .message("Någon har lagt ett högre bud på: ")
              .isRead(false)
              .build();

      notificationRepository.save(notification);
      socketModule.emit("notification", notification);
  }

  public void createNotificationForWinner(Auction auction, User user) {
    Notification notification = Notification.builder()
            .auction(auction)
            .user(user)
            .message("Grattis du vann auktionen: ")
            .isRead(false)
            .build();

    notificationRepository.save(notification);
    socketModule.emit("notification", notification);
  }

  public void createNotificationForBidders(List<Bid> bids, double price) {
    List<Long> ids = new ArrayList<>();

    for(Bid bid : bids) {
      if (!ids.contains(bid.getUser().getId())) {
        Notification notification = Notification.builder()
               .auction(bid.getAuction())
               .user(bid.getUser())
               .message(" avslutades på " + price + " SEK")
               .isRead(false)
               .build();
        notificationRepository.save(notification);
        socketModule.emit("notification", notification);

        ids.add(bid.getUser().getId());
      }
    }
  }

  public List<Notification> getNotificationsByUser() {
    User currentUser = userService.findCurrentUser();
    if (currentUser == null){
      return null;
    }
    return notificationRepository.findNotificationsByUserId(currentUser.getId());
  }

  public List<Notification> updateIsRead() {
    List<Notification> notifications = getNotificationsByUser();
    if (notifications == null) {
      return null;
    }

    for (Notification notification : notifications) {
      notification.setIsRead(true);
      notificationRepository.save(notification);
    }
    return notifications;
  }
}
