package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Status;
import com.server.backend.specifications.AuctionSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Service
public class SearchService {

    @Autowired
    private AuctionService auctionService;

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
            if (categorySpecification == null) {
                categorySpecification = specification;
            } else {
                categorySpecification = categorySpecification.or(specification);
            }
        }
        return categorySpecification;
    }

    public List<Auction> getAuctionByTitleAndStatusAndCategory(String title, Status status, String categoryName, Integer page, String sort) {
        try{
            title = URLDecoder.decode(title, StandardCharsets.UTF_8.name());
            List<String> words = Arrays.asList(title.split(" "));
            List<String> categoryNames = new ArrayList<>();

            if (categoryName != null) {
                categoryName = URLDecoder.decode(categoryName, StandardCharsets.UTF_8.name());
                categoryNames = Arrays.asList(categoryName.split(" "));
            }

            return getAuctionByTitleAndStatusAndCategory(words, status, categoryNames, page, sort);
        } catch (UnsupportedEncodingException e) {
            return null;
        }
    }

    public List<Auction> getAuctionByTitleAndStatusAndCategory(List<String> words, Status status, List<String> categoryNames, Integer page, String sort) {
        if(words.isEmpty()) {
            return Collections.emptyList();
        }

        Specification<Auction> wordSpecification = getTitleSpecification(words);
        Specification<Auction> statusSpecification = getStatusSpecification(status);
        Specification<Auction> categorySpecification = getCategorySpecification(categoryNames);

        Specification<Auction> totalSpecification = Specification.where(wordSpecification).and(statusSpecification);

        if (categorySpecification != null) {
            totalSpecification = totalSpecification.and(categorySpecification);
        }

        return auctionService.findAll(totalSpecification, page, sort);
    }


}
