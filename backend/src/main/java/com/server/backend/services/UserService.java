package com.server.backend.services;

import com.server.backend.configs.MyUserDetailsService;
import com.server.backend.entities.User;
import com.server.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MyUserDetailsService myUserDetailsService;

    public User createUser(User user){
        return myUserDetailsService.addUser(user);
    }

}
