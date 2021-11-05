package com.server.backend.repositories;

import com.server.backend.entities.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BidRepository extends JpaRepository<Bid, Long> {

  Bid findTopByAuctionIdOrderByPriceDesc(Long auctionId);
}
