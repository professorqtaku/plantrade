package com.server.backend.controllers;

import com.server.backend.entities.Chat;
import com.server.backend.services.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/chats")
public class ChatController {
    @Autowired
    private ChatService chatService;

    @PostMapping
    public ResponseEntity<Chat> createChat(Chat chat){
        try {
            Chat saved = chatService.saveChat(chat);
            return ResponseEntity.ok(saved);
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
    @GetMapping
    public ResponseEntity<List<Chat>> getChatsByCurrentUser(){
        try {
            List<Chat> chats = chatService.getChatsByCurrentUser();
            if (chats == null || chats.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(chats);
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
