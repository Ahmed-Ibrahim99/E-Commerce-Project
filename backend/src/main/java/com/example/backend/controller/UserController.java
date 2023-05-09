package com.example.backend.controller;

import com.example.backend.config.security.jwt.JwtAuthenticationFilter;
import com.example.backend.dto.UserRequest;
import com.example.backend.dto.UserResponse;
import com.example.backend.model.User;
import com.example.backend.service.RoleService;
import com.example.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final AuthenticationManager authenticationManager;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserService userService;
    private final RoleService roleService;

    public UserController(JwtAuthenticationFilter jwtAuthenticationFilter, AuthenticationManager authenticationManager, BCryptPasswordEncoder bCryptPasswordEncoder, UserService userService, RoleService roleService) {
        this.jwtAuthenticationFilter = jwtAuthenticationFilter;
        this.authenticationManager = authenticationManager;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userService = userService;
        this.roleService = roleService;
    }

    @PostMapping("/sign-in")
    public UserResponse signIn(@RequestBody UserRequest userRequest) {
        //if authentication is success it will proceed to generate token
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userRequest.getEmail(), userRequest.getPassword())
        );
        String token = jwtAuthenticationFilter.generateToken(userRequest.getEmail());
        UserResponse userResponse = new UserResponse();
        userResponse.setEmail(userRequest.getEmail());
        userResponse.setToken(token);
        return userResponse;
    }

    @PostMapping("/sign-up")
    public ResponseEntity<UserRequest> signUp(@RequestBody UserRequest userRequest) {
        boolean result = userService.emailExist(userRequest.getEmail());
        if (!result) {
            User user = new User();
            user.setEmail(userRequest.getEmail());
            user.setPassword(bCryptPasswordEncoder.encode(userRequest.getPassword()));
            user.setActive(true);
            user.getRoles().add(roleService.getRoles().get(0));

            this.userService.addUser(user);

            return new ResponseEntity<>(userRequest, HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<>(HttpStatus.IM_USED);
    }
}
