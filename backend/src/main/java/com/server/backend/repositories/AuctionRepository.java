package com.server.backend.repositories;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Status;
import com.server.backend.entities.User;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.Column;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Repository
public interface AuctionRepository extends JpaRepository<Auction, Long>, JpaSpecificationExecutor<Auction>, PagingAndSortingRepository<Auction, Long> {

    List<Auction> findByHost(User user);

    List<Auction> findByStatus(Status status, Pageable pageable);

    Long countByStatus(Status status);

    List<Auction> findByWinner(User user);

//    List<Auction> findAllByStatusToUpperCase(String status);
}
