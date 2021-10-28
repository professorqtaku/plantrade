package com.server.backend.specifications;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Status;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Expression;

public class AuctionSpecification {
    public static Specification<Auction> titleContains(String searchWord) {
        return (root, query, builder) -> {
            Expression<String> titleLowerCase = builder.lower(root.get("title"));
            return builder.like(titleLowerCase, "%" + searchWord.toLowerCase() + "%");
        };
    }

    public static Specification<Auction> hasStatus(Status status) {
        return (root, query, builder) -> {
            Expression<String> statusExpression =root.get("status");
            return builder.equal(statusExpression, status);
        };
    }
}
