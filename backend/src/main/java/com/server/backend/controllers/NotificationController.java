package com.server.backend.controllers;

import com.server.backend.entities.Notification;
import com.server.backend.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notification")
public class NotificationController {

  @Autowired
  private NotificationService notificationService;

/*  @PostMapping
  public ResponseEntity<Notification> createNotification(@RequestBody long id) {
    try {
      Notification notification = notificationService.createNotification(id);
      if (notification != null){
        return ResponseEntity.ok(notification);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    return ResponseEntity.badRequest().build();
  }*/

  @GetMapping("/{id}")
  public ResponseEntity<List<Notification>> getNotificationsByCurrentUser() {
    return null;
  }

}
