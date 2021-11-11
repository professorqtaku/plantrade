package com.server.backend.services;

import com.server.backend.entities.Chat;
import com.server.backend.entities.Message;
import com.server.backend.entities.User;
import com.server.backend.repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Date;
import java.util.List;
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
            message.setCreatedDate(new Date());
            if (message.getIsRead() == null) {
                message.setIsRead(false);
            }
            return messageRepository.save(message);
        }
        return null;
    }

    public List<Message> getAllByChatId(long chatId) {
        User currentUser = userService.findCurrentUser();
        if (currentUser == null) {
            return null;
        }

        Optional<Chat> chatOptional = chatService.getById(chatId);
        if (chatOptional.isEmpty()) {
            return null;
        }
        Chat chat = chatOptional.get();

        List<Message> messages = messageRepository.findAllByChatIdOrderByCreatedDateAsc(chatId);

        if(chat.getCreator() == currentUser || chat.getReceiver() == currentUser){
            for(Message message : messages){
                if(message.getWriter() != currentUser){
                    message.setIsRead(true);
                    messageRepository.save(message);
                }
            }
        return messages;
        }
        return null;
    }

}
