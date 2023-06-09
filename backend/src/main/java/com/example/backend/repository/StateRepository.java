package com.example.backend.repository;

import com.example.backend.model.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource
@CrossOrigin(origins = "http://localhost:4200")
public interface StateRepository extends JpaRepository<State, Integer> {

    List<State> findByCountryCodeIgnoreCase(@Param("code") String code);
}
