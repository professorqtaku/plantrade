package com.server.backend.specifications;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Category;
import com.server.backend.entities.Status;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Expression;
import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import java.util.List;
import java.util.Locale;

public class AuctionSpecification {
    public static Specification<Auction> titleContains(String searchWord) {
        return (root, query, builder) -> {
            Expression<String> titleLowerCase = builder.lower(root.get("title"));
            return builder.like(titleLowerCase, "%" + searchWord.toLowerCase() + "%");
        };
    }

    public static Specification<Auction> hasStatus(Status status) {
        return (root, query, builder) -> {
            Expression<String> statusExpression = root.get("status");
            return builder.equal(statusExpression, status);
        };
    }

    public static Specification<Auction> containsCategoryWithName(String name) {
        return (root, query, builder) -> {
            Join<Object, Object> categoryJoin = root.join("categories", JoinType.INNER);
            Expression<String> categoryExpression = builder.lower(categoryJoin.get("name"));
            query.distinct(true);
            return builder.equal(categoryExpression, name.toLowerCase());
        };
    }
}
