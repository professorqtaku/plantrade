package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Notification;
import com.server.backend.entities.User;
import com.server.backend.repositories.NotificationRepository;
import com.server.backend.springsocket.SocketModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationService {

  @Autowired
  private NotificationRepository notificationRepository;

  @Autowired
  private UserService userService;

  @Autowired
  private SocketModule socketModule;

  public void sendNotifications(Auction auction, int price, User user) {
    createNotificationForHost(auction, price);
    if (user != null) {
      createNotificationForUser(user, auction);
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

  public void createNotificationForUser(User user, Auction auction) {
      Notification notification = Notification.builder()
              .auction(auction)
              .user(user)
              .message("Någon har lagt ett högre bud på: ")
              .isRead(false)
              .build();

      notificationRepository.save(notification);
      socketModule.emit("notification", notification);
  }

  public List<Notification> getNotificationsByUser() {
    User currentUser = userService.findCurrentUser();
    if (currentUser == null){
      return null;
    }
    List<Notification> notificationList = notificationRepository.findNotificationsByUserId(currentUser.getId());
    if (notificationList.size() > 30){
      notificationList.subList(30, notificationList.size()).clear();
    }
    return notificationList;
  }
}
