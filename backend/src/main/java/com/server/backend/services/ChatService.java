package com.server.backend.services;

import com.server.backend.entities.Chat;
import com.server.backend.entities.User;
import com.server.backend.repositories.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChatService {

    @Autowired
    private ChatRepository chatRepository;

    @Autowired
    private UserService userService;

    public Chat saveChat(Chat chat) {
        User currentUser = userService.findCurrentUser();
        chat.setCreator(currentUser);
        return chatRepository.save(chat);
    }

    public Optional<Chat> getById(long id) {
        return chatRepository.findById(id);
    }

    public List<Chat> getChatsByCurrentUser() {
        User currentUser = userService.findCurrentUser();
        if (currentUser == null) {
            return null;
        }
        return chatRepository.customFindByCreatorIdOrReceiverId((currentUser.getId()));
    }
}
