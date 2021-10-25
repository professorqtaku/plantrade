package com.server.backend.repositories;

import com.server.backend.entities.Auction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuctionRepository extends JpaRepository<Auction, Long> {

//    List<Auction> findAllByStatusToUpperCase(String status);
}
