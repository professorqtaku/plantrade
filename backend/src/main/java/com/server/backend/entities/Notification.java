package com.server.backend.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonIncludeProperties;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name="notifications")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Notification {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String message;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIncludeProperties({"id"})
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JsonIncludeProperties({"id", "title"})
    private Auction auction;

    @Column(name="is_read", columnDefinition = "BOOLEAN", nullable=false)
    private Boolean isRead;
}
