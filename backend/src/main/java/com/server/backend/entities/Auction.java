package com.server.backend.entities;

import jdk.jfr.Category;
import lombok.*;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.awt.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="auctions")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Auction {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String title;
    private String description;
    private Integer startPrice;
    private Status status;
    private Date endDate;

    @ManyToOne
    private User host;

/*
  @ManyToMany(cascade = CascadeType.DETACH)
  @JoinTable(
        name = "AuctionXCategory",
        joinColumns = @JoinColumn(name = "auction_id"),
        inverseJoinColumns = @JoinColumn(name = "category_id")
    )
    private List<Category> categories;

    @OneToMany(mappedBy = "auction_id", cascade = CascadeType.REMOVE)
   private List<Bid> bids;

    @OneToMany(mappedBy = "auction", cascade = CascadeType.REMOVE)
    private List<Image> images;

    public void addCategory(Category category) {
        categories.add(category);
   }

    public void removeCategory(Category category) {
        categories.remove(category);
    }

    public void addImage(Image image) {
        images.add(image);
    }

    public void removeImage(Image image) {
        images.remove(image);
    }

    public void addBid(Bid bid) {
        bids.add(bid);
    }

    public void removeBid(Bid bid) {
        bids.remove(bid);
    }

*/




}
