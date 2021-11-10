package com.server.backend.repositories;

import com.server.backend.entities.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

  @Query(value = "SELECT * FROM notifications WHERE user_id = :userId", nativeQuery = true)
  List<Notification> findNotificationsByUserId(@Param("userId") long userId);
}
