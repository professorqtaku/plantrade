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
@Table(name="chats")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIncludeProperties({"id"})
    private Auction auction;

    // connection to User.chats (one user has many chats, one chat = one creator || one receiver)
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIncludeProperties({"id", "username"})
    private User creator, receiver;

//    private Auction auction;

    // mappedBy="chat" is the variable in the Message class
    @OneToMany(mappedBy = "chat", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    @JsonIgnoreProperties({"chat"}) // prevent circular reference between relations
    private List<Message> messages;
}
