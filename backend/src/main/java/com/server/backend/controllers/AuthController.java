package com.server.backend.controllers;

import com.server.backend.entities.User;
import com.server.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    private UserService userService;


    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user, HttpServletRequest req){
        var usern = userService.login(user,req);
        if(usern == null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(usern);
    }

    @PostMapping("/register")
    public ResponseEntity<User> register(@RequestBody User user){
        var newUser = userService.createUser(user);
        if(newUser == null){
            return ResponseEntity.badRequest().build();
        }
            return ResponseEntity.ok(newUser);
    }


    @GetMapping("/whoami")
    public User whoAmI(){
        return userService.findCurrentUser();
    }

    @DeleteMapping("/logout")
    public void logout(HttpServletRequest req){
        userService.logout(req);
    }
}
