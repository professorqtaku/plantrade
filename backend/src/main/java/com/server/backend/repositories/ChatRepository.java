package com.server.backend.repositories;

import com.server.backend.entities.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ChatRepository extends JpaRepository<Chat, Long> {

    @Query(value = "SELECT * FROM chats\n" +
            "WHERE creator_id = :userId\n" +
            "OR receiver_id = :userId"
            , nativeQuery = true)
    List<Chat> customFindByCreatorIdOrReceiverId(@Param("userId") long userId);

    Chat findByAuctionIdAndCreatorIdAndReceiverId(long auctionId, long creatorId, long receiverId);
}
