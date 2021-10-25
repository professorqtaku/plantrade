package com.server.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Chat {

    @Id
    @GeneratedValue
    private Long id;

    // connection to User.chats (one user has many chats, one chat = one creator || one receiver)
    @OneToOne(fetch = FetchType.EAGER)
    @JsonIncludeProperties({"id", "username"})
    private User creator, receiver;

//    private Auction auction;

    // mappedBy="chat" is the variable in the Message class
    @OneToMany(mappedBy = "chat", fetch = FetchType.EAGER, cascade = CascadeType.DETACH)
    @JsonIgnoreProperties({"chat"}) // prevent circular reference between relations
    private List<Message> messages;
}
