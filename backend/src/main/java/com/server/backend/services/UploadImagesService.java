package com.server.backend.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
public class UploadImagesService {
    public List<String> saveFiles(List<MultipartFile> files) {
        List<String> uploadUrls = new ArrayList<>();

        // get current working directory
        String cwd = System.getProperty("user.dir");
        String uploadFolder = cwd + "/src/main/resources/static";

        for (var file : files) {
            System.out.println(file.getOriginalFilename());

            var uploadUrl = "/uploads/" + file.getOriginalFilename();

            // create destination to save uploaded file
            File toSave = new File(uploadFolder + uploadUrl);

            try {
                // move uploaded to uploads folder
                file.transferTo(toSave);

                uploadUrls.add(uploadUrl);
            } catch (Exception e) {
                e.printStackTrace();
            }

        }

        return uploadUrls;
    }
}
