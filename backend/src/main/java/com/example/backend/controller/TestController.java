package com.example.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("test")
public class TestController {

    @GetMapping("user")
    public String test(){
        return "test";
    }

    @GetMapping("admin")
    public String admin(){
        return "admin";
    }
}
