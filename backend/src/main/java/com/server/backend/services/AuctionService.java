package com.server.backend.services;

import com.server.backend.entities.Auction;
import com.server.backend.entities.Image;
import com.server.backend.entities.Status;
import com.server.backend.entities.User;
import com.server.backend.repositories.AuctionRepository;
import com.server.backend.repositories.ImageRepository;
import com.server.backend.specifications.AuctionSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Service
public class AuctionService {

    @Autowired
    private AuctionRepository auctionRepository;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private UploadImagesService uploadImagesService;

    public List<Auction> getAllOpenAuctions(Status status) {
        List<Auction> openAuctions = auctionRepository.findByStatus(status);
        Date date = new Date();
        for(var auction : openAuctions) {
            if(auction.getEndDate().getTime() < date.getTime()){
                if(auction.getBids().size() > 0){
                    auction.setStatus(Status.SOLD);
                } else {
                    auction.setStatus(Status.NOT_SOLD);
                }
                auctionRepository.save(auction);
            }
        }
        return auctionRepository.findByStatus(status);
    }
    
    public Auction createAuction(Auction auction, User user, List<MultipartFile> files) {
        Date date = new Date();
        var inputDate = auction.getEndDate().getTime();
        if(Long.toString(inputDate).length() < 13) {
            inputDate *= 1000;
            auction.setEndDate(new Date(inputDate));
        }
        long oneDayInMillis = date.getTime() + 86400000L;
        long oneMonthInMillis = date.getTime() + 2592000000L;

        if (inputDate < oneDayInMillis || inputDate > oneMonthInMillis) {
            return null;
        }
        auction.setStatus(Status.OPEN);
        auction.setHost(user);
        Auction savedAuction = auctionRepository.save(auction);

        if(files != null) {
            var urls = uploadImagesService.saveFiles(files);
            urls.forEach(url -> {
                Image image = Image.builder()
                        .path(url)
                        .auction(savedAuction)
                        .build();
                imageRepository.save(image);
            });
        }
        return savedAuction;
    }

    public Optional<Auction> getAuctionById(long id) {
        return auctionRepository.findById(id);
    }

    public List<Auction> getAuctionsByCurrentUser(User user) {
        return auctionRepository.findByHost(user);
    }

    public List<Auction> getAuctionByTitleAndStatus(String title, Status status) {
        try{
            title = URLDecoder.decode(title, StandardCharsets.UTF_8.name());
        } catch (UnsupportedEncodingException e) {
            return null;
        }
        List<String> words = Arrays.asList(title.split(" "));
        return getAuctionsWhereTitleContainsAnyWord(words, status);
    }

    public List<Auction> getAuctionsWhereTitleContainsAnyWord(List<String> words, Status status) {
        if(words.isEmpty()) {
            return Collections.emptyList();
        }

        Specification<Auction> wordSpecification = null;
        for(String word : words) {
            Specification<Auction> specification = AuctionSpecification.titleContains(word);
            if (wordSpecification == null) {
                wordSpecification = specification;
            } else {
                wordSpecification = wordSpecification.or(specification);
            }
        }

        Specification<Auction> statusSpecification = AuctionSpecification.hasStatus(Objects.requireNonNullElse(status, Status.OPEN));

        Specification<Auction> totalSpecification = Specification.where(wordSpecification).and(statusSpecification);

        return auctionRepository.findAll(totalSpecification);
    }
}
