package com.server.backend.controllers;

import com.server.backend.services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
public class ImageController {
    @Autowired
    private ImageService imageService;

    @PostMapping("/api/upload")
    public List<String> upload(@RequestParam List<MultipartFile> files) {

        return imageService.saveFiles(files);
    }
}
