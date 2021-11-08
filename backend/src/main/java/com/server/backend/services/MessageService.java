package com.server.backend.services;

import com.server.backend.entities.Chat;
import com.server.backend.entities.Message;
import com.server.backend.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private ChatService chatService;

    public Message sendMessage(Message message, long chatId) {
        Optional<Chat> chatOptional = chatService.getById(chatId);
        if (chatOptional.isEmpty()) {
            return null;
        }
        Chat chat = chatOptional.get();
        chat.addMessage(message);
        chatService.saveChat(chat);
        return message;
    }
}
