package com.server.backend.controllers;

import com.server.backend.entities.Message;
import com.server.backend.services.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @PostMapping("/{chatId}")
    public ResponseEntity<Message> sendMessage(@RequestBody Message message, @RequestParam long chatId) {
        try{
            Message saved = messageService.sendMessage(message, chatId);
            if (saved != null) {
                return ResponseEntity.ok(saved);
            }
        } catch (Exception ignored) { }
        return ResponseEntity.badRequest().build();
    }
}
