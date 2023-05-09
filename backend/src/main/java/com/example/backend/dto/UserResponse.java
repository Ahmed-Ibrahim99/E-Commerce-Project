package com.example.backend.dto;

import lombok.Data;

@Data
public class UserResponse {
    private String email;
    private String token;
}
