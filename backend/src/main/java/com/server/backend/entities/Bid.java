package com.server.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "bids")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Bid {

  @Id
  @GeneratedValue
  private long id;

  @ManyToOne
  private User user;
  @ManyToOne
  private Auction auction;
  private int price;
  private long createdDate;

}
