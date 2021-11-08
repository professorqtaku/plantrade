package com.server.backend.controllers;

import com.server.backend.entities.Chat;
import com.server.backend.services.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/chats")
public class ChatController {
    @Autowired
    private ChatService chatService;

    @PostMapping
    public ResponseEntity<Chat> createChat(@RequestBody Map values){
        try {
            Chat saved = chatService.createChat(values);
            return ResponseEntity.ok(saved);
        }
        catch (Exception e) {
            System.out.println(e);
        }
        return ResponseEntity.badRequest().build();
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
