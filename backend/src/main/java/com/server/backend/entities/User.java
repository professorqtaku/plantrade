package com.server.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
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
public class User {
    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String email;
    private String password;

    @OneToMany(mappedBy ="creator", fetch = FetchType.EAGER) // connects relation to the chat list of creators
    @JsonIgnoreProperties({"creator", "receiver"})
    private List<Chat> chats;
//    @OneToMany(mappedBy = "chat", fetch = FetchType.LAZY)
//    @JsonIncludeProperties({"id"})
//    private List<Chat> chats;

//    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.DETACH)
//    @JoinTable(
//            name="won_auctions",
//            joinColumns = @JoinColumn(name = "user_id"),
//            inverseJoinColumns = @JoinColumn(name = "auction_id")
//    )
//    private List<Auction> wonAuctions;


    @JsonIgnore
    public String getPassword() {
        return password;
    }

    @JsonProperty
    public void setPassword(String password) {
        this.password = password;
    }

//    public void addChat(Chat chat) {
//        this.chats.add(chat);
//    }

//    public void addWonAuction(Auction auction) {
//        this.wonAuctions.add(auction);
//    }


}
