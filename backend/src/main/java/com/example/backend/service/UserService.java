package com.example.backend.service;

import com.example.backend.dto.UserRequest;
import com.example.backend.model.Role;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //get user by email
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            return new org.springframework.security.core.userdetails.User(
                    user.get().getEmail(),
                    user.get().getPassword(),
                    getAuthorization(user.get().getRoles()));
        } else {
            throw new UsernameNotFoundException("User not Found");
        }
    }

    public void addUser(User user){
        this.userRepository.save(user);
    }

    public boolean emailExist(String email){
        return this.userRepository.existsByEmail(email);
    }

    private Collection<? extends GrantedAuthority> getAuthorization(Set<Role> roles) {
        return (roles != null && !roles.isEmpty()) ?
                roles.stream().map(r -> new SimpleGrantedAuthority(r.getName())).collect(Collectors.toList())
                : new ArrayList<>();
    }

}
