package com.cognizant.jwt.controller;

import java.security.Principal;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.jwt.model.AuthenticationResponse;
import com.cognizant.jwt.util.JwtUtil;

@RestController
public class AuthenticationController {

    private final JwtUtil jwtUtil = new JwtUtil();

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(Principal principal) {

        String token = jwtUtil.generateToken(principal.getName());

        return new AuthenticationResponse(token);
    }
}