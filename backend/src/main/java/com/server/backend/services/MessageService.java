package com.server.backend.services;

import com.server.backend.entities.Chat;
import com.server.backend.entities.Message;
import com.server.backend.entities.User;
import com.server.backend.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class MessageService {
    @Autowired
    private MessageRepository messageRepository;
    @Autowired
    private UserService userService;

    @Autowired
    private ChatService chatService;

    public Message sendMessage(Message message, long chatId) {
        User currentUser = userService.findCurrentUser();
        if (currentUser == null) {
            return null;
        }

        Optional<Chat> chatOptional = chatService.getById(chatId);
        if (chatOptional.isEmpty()) {
            return null;
        }

        Chat chat = chatOptional.get();
        if (chat.getCreator() == currentUser || chat.getReceiver() == currentUser) {
            message.setWriter(currentUser);
            message.setChat(chat);
            if (message.getIsRead() == null) {
                message.setIsRead(false);
            }
            if (message.getCreatedDate() == null) {
                message.setCreatedDate(new Date());
            }
            return saveMessage(message);
        }
        return null;
    }

    public Message saveMessage(Message message) {
        return messageRepository.save(message);
    }
}
