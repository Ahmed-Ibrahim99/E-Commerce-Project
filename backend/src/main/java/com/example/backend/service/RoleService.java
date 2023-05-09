package com.example.backend.service;

import com.example.backend.model.Role;
import com.example.backend.repository.RoleRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class RoleService {
    private final RoleRepository roleRepository;

    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Transactional()
    public List<Role> getRoles() {
        return roleRepository.findAll();
    }
}
