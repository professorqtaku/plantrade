package com.server.backend.services;

import com.server.backend.configs.MyUserDetailsService;
import com.server.backend.entities.User;
import com.server.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import static org.springframework.security.web.context.HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MyUserDetailsService myUserDetailsService;

    @Resource(name = "authenticationManager")
    private AuthenticationManager authManager;


    public User findCurrentUser(){
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findByUsername(username);
    }

    public User createUser(User user) {
        var newUser = userRepository.findByEmail(user.getEmail());
        if(newUser == null){
            return myUserDetailsService.addUser(user);
        }
        return null;
    }


    public void logout(HttpServletRequest req){
        SecurityContext sc = SecurityContextHolder.createEmptyContext();
        HttpSession session = req.getSession(false);
        session.setAttribute(SPRING_SECURITY_CONTEXT_KEY, sc);
    }

    public User login(User user, HttpServletRequest req){
        try {
            //Let spring security handle authentication of credentials
            UsernamePasswordAuthenticationToken authReq
                    = new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword());
            Authentication auth = authManager.authenticate(authReq);

            //Add logged in user to session
            SecurityContext sc = SecurityContextHolder.getContext();
            sc.setAuthentication(auth);

            //Set cookie to remember logged in user
            HttpSession session = req.getSession(true);
            session.setAttribute(SPRING_SECURITY_CONTEXT_KEY, sc);
        } catch (BadCredentialsException err){
            // throw error on bad credential
            //throw new BadCredentialsException("Bad Credentials");
            return null;
        }
        return findCurrentUser();
    }
}
