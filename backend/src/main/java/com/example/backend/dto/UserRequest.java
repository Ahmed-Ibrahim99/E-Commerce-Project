package com.example.backend.dto;

import lombok.Data;

@Data
public class UserRequest {
    private String email;
    private String password;
}
