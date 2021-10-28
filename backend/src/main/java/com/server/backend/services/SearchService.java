package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Status;
import com.server.backend.specifications.AuctionSpecification;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class SearchService {

    public Specification<Auction> getTitleSpecification(List<String> words) {
        Specification<Auction> wordSpecification = null;
        for(String word : words) {
            Specification<Auction> specification = AuctionSpecification.titleContains(word);
            if (wordSpecification == null) {
                wordSpecification = specification;
            } else {
                wordSpecification = wordSpecification.or(specification);
            }
        }
        return wordSpecification;
    }

    public Specification<Auction> getStatusSpecification(Status status) {
        return AuctionSpecification.hasStatus(Objects.requireNonNullElse(status, Status.OPEN));
    }

    public Specification<Auction> getCategorySpecification(List<String> categoryNames) {
        Specification<Auction> categorySpecification = null;
        for (String categoryName: categoryNames) {
            Specification<Auction> specification = AuctionSpecification.containsCategoryWithName(categoryName);
            System.out.println(specification);
            if (categorySpecification == null) {
                categorySpecification = specification;
            } else {
                categorySpecification = categorySpecification.or(specification);
            }
        }
        return categorySpecification;
    }



}
