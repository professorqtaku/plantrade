package com.server.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="messages")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @ManyToOne
    @JsonIncludeProperties({"id", "username"})
    private User writer;

    private String message;
    private Date createdDate;

    @Column(name="is_read", columnDefinition = "BOOLEAN", nullable=false)
    private Boolean isRead;

//    private Long chatId;
    @OneToOne(fetch = FetchType.EAGER) // connects relation to the chat list of messages
    @JsonIgnore
    private Chat chat;
}
