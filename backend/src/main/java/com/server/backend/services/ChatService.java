package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Chat;
import com.server.backend.entities.User;
import com.server.backend.repositories.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ChatService {

    @Autowired
    private ChatRepository chatRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private AuctionService auctionService;

    public Chat createChat(Map values) {
        User currentUser = userService.findCurrentUser();
        Optional<Auction> auctionOptional = auctionService.getAuctionById((int) values.get("auctionId"));
        if (currentUser == null || !values.containsKey("auctionId") || auctionOptional.isEmpty()) {
            return null;
        }

        Auction auction = auctionOptional.get();
        // creator cannot be host of auction
        if(auction.getHost() == currentUser){
            return null;
        }

        Chat chat = chatRepository.findByAuctionIdAndCreatorIdAndReceiverId(auction.getId(), currentUser.getId(), auction.getHost().getId());
        if (chat != null) {
            return chat;
        }

        Chat newChat = Chat.builder()
                .auction(auction)
                .creator(currentUser)
                .receiver(auction.getHost())
                .build();
        return saveChat(newChat);
    }

    public Chat saveChat(Chat chat) {
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
