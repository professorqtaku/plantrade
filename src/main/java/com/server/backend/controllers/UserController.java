package com.server.backend.controllers;

import com.server.backend.entities.User;
import com.server.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Map;

@RestController
@RequestMapping("/rest")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/users")
    public ResponseEntity<User> update(@RequestBody Map values) {
        try {
            User user = userService.updateUser(values);
            return ResponseEntity.ok(user);
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/websocket")
    public RedirectView socketRedirect(){
        return new RedirectView("http://localhost:9092");
    }
}
