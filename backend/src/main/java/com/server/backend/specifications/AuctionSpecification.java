package com.server.backend.specifications;

import com.server.backend.entities.Auction;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Expression;

public class AuctionSpecification {
    public static Specification<Auction> titleContains(String searchWord) {
        return (root, query, builder) -> {
            Expression<String> titleLowerCase = builder.lower(root.get("title"));
            return builder.like(titleLowerCase, "%" + searchWord.toLowerCase() + "%");
        };
    }
}
