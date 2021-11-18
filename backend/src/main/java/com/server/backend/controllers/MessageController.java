package com.server.backend.controllers;

import com.server.backend.entities.Message;
import com.server.backend.services.MessageService;
import com.server.backend.springsocket.SocketModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private SocketModule socketModule;

    @PostMapping("/{chatId}")
    public ResponseEntity<Message> sendMessage(@RequestBody Message message, @PathVariable long chatId) {
        try{
            Message saved = messageService.sendMessage(message, chatId);
            if (saved != null) {
                //socketModule.emitToRoom(chatId + "", "message", message.getWriter());
                socketModule.server.getClient(UUID.fromString(messageService.getTheReceiverClientId(chatId, message.getWriter()))).sendEvent("message", message);
                return ResponseEntity.ok(saved);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return ResponseEntity.badRequest().build();
    }

    @GetMapping("/{chatId}")
    public ResponseEntity<List<Message>> getAllChatMessages(@PathVariable long chatId) {
        try {
            List<Message> messages = messageService.getAllByChatId(chatId);
            if (messages == null || messages.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(messages);
        }
        catch (Exception e){
            return ResponseEntity.badRequest().build();
        }
    }
}
