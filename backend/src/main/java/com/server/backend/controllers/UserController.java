package com.server.backend.controllers;

import com.server.backend.entities.User;
import com.server.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/rest")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public User update(@RequestBody Map values) {
        return userService.update(values);
    }
}
