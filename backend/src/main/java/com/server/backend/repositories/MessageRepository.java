package com.server.backend.repositories;

import com.server.backend.entities.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findAllByChatIdOrderByCreatedDateAsc(long chatId);
}
