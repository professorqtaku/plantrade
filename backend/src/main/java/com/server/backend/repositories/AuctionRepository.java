package com.server.backend.repositories;

import com.fasterxml.jackson.annotation.JsonFilter;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.server.backend.entities.Auction;
import com.server.backend.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuctionRepository extends JpaRepository<Auction, Long> {

    List<Auction> findByHost(User user);

//    List<Auction> findAllByTitleContaining(String title);

    @Query(value="SELECT * FROM auctions WHERE title LIKE %:title%", nativeQuery = true)
    List<Auction> costumFindAllByTitle(@Param("title") String title);

//    List<Auction> findAllByStatusToUpperCase(String status);
}
