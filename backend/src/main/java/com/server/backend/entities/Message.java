package com.server.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    private Long id;

    @ManyToOne
    private User writer;

    private String message;
    private Date createDate;
    @Column(name="is_read", columnDefinition = "BOOLEAN", nullable=false)
    private Boolean isRead;

//    private Long chatId;
    @OneToOne(fetch = FetchType.EAGER) // connects relation to the chat list of messages
    @JsonIgnoreProperties("messages")
    private Chat chat;
}
