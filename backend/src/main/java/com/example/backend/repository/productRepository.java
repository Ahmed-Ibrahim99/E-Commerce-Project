package com.example.backend.repository;

import com.example.backend.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@Repository
@CrossOrigin(origins = "http://localhost:4200")
public interface productRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT * FROM product where category_id=?", nativeQuery = true)
    Page<Product> findByCategory_Id(@RequestParam("id") Long id, Pageable pageable);

    Page<Product> findByNameIgnoreCaseContaining(@RequestParam("name") String name, Pageable pageable);
}
