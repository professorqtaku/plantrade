package com.server.backend.controllers;

import com.server.backend.entities.Notification;
import com.server.backend.services.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class NotificationController {

  @Autowired
  private NotificationService notificationService;

  @GetMapping("/{id}")
  public ResponseEntity<List<Notification>> getNotificationsByCurrentUser() {
    return null;
  }

}
