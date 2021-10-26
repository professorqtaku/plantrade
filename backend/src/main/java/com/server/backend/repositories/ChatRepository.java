package com.server.backend.repositories;

import com.server.backend.entities.Chat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ChatRepository extends JpaRepository<Chat, Long> {
//    public List<Chat> getChatsByUserId(Long userId);
}
