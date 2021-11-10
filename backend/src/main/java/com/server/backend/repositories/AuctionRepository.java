package com.server.backend.repositories;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Status;
import com.server.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuctionRepository extends JpaRepository<Auction, Long>, JpaSpecificationExecutor<Auction>, PagingAndSortingRepository<Auction, Long> {

    List<Auction> findByHost(User user);

    Long countByStatus(Status status);

    List<Auction> findByWinner(User user);

//    List<Auction> findAllByStatusToUpperCase(String status);
}
