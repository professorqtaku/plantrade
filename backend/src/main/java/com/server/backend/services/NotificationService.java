package com.server.backend.services;

import com.corundumstudio.socketio.SocketIOClient;
import com.server.backend.entities.Auction;
import com.server.backend.entities.Bid;
import com.server.backend.entities.Notification;
import com.server.backend.entities.User;
import com.server.backend.repositories.NotificationRepository;
import com.server.backend.springsocket.SocketModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

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
      createNotificationForUser(auction, user, price);
    }
  }

  public void createNotificationForHost(Auction auction, int price) {
    Notification notification = Notification.builder()
            .auction(auction)
            .user(auction.getHost())
            .message(auction.getTitle() + " har fått ett nytt bud: " + price + " SEK")
            .isRead(false)
            .createdDate(new Date())
            .build();

    notificationRepository.save(notification);
    sendNotificationWithClientId(auction.getHost().getClientId(), notification);
  }

  public void createNotificationForUser(Auction auction, User user, int price) {
      Notification notification = Notification.builder()
              .auction(auction)
              .user(user)
              .message("Någon har lagt ett högre bud (" + price + " SEK) på: " + auction.getTitle())
              .isRead(false)
              .createdDate(new Date())
              .build();

      notificationRepository.save(notification);
    sendNotificationWithClientId(user.getClientId(), notification);
  }

  public void createNotificationForWinner(Auction auction, User user) {
    Notification notification = Notification.builder()
            .auction(auction)
            .user(user)
            .message("Grattis du vann auktionen: ")
            .isRead(false)
            .createdDate(new Date())
            .build();

    notificationRepository.save(notification);
    sendNotificationWithClientId(user.getClientId(), notification);
  }

  public void createNotificationForBidders(List<Bid> bids, int price, Bid highestBidder) {
    List<Long> ids = new ArrayList<>();

    for(Bid bid : bids) {
      if (bid.getUser() != highestBidder.getUser()) {
        if (!ids.contains(bid.getUser().getId())) {
          Notification notification = Notification.builder()
                .auction(bid.getAuction())
                .user(bid.getUser())
                .message("avslutades på " + price + " SEK")
                .isRead(false)
                .createdDate(new Date())
                .build();
          notificationRepository.save(notification);
          sendNotificationWithClientId(bid.getUser().getClientId(), notification);
          ids.add(bid.getUser().getId());
        }
      }
    }
  }

  public void createEndNotificationForHost(Auction auction, int price) {
    Notification notification = Notification.builder()
            .auction(auction)
            .user(auction.getHost())
            .message("avslutades på " + price + " SEK")
            .isRead(false)
            .createdDate(new Date())
            .build();
    notificationRepository.save(notification);
    sendNotificationWithClientId(auction.getHost().getClientId(), notification);
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

  private void sendNotificationWithClientId(String clientId, Notification notification) {
    if(clientId != null) {
      try{
        UUID uuid = UUID.fromString(clientId);
        SocketIOClient socketClient = socketModule.server.getClient(uuid);
        if(socketClient != null) {
          socketClient.sendEvent("notification", notification);
        }
      }
      catch(Exception e) {
        System.out.println(clientId);
        System.out.println("----CANNOT FIND UUID----");
      }
    }
  }
}
