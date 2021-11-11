package com.server.backend.controllers;

import com.server.backend.entities.Notification;
import com.server.backend.services.NotificationService;
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
      e.printStackTrace();
    }
    return ResponseEntity.noContent().build();
  }

  @PutMapping("/update-is-read")
  public ResponseEntity<List<Notification>> updateIsRead() {
    try {
      Map<String, Boolean> values = new HashMap<String, Boolean>();
      values.put("isRead", true);

      List<Notification> updatedNotifications = notificationService.updateIsRead(values);
      if (updatedNotifications != null) {
        return ResponseEntity.ok(updatedNotifications);
      }
    } catch (Exception e) {
      e.printStackTrace();
    }
    return ResponseEntity.status(403).build();
  }

}
