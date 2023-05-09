package com.example.backend.controller;

import com.example.backend.dto.Purchase;
import com.example.backend.dto.PurchaseResponse;
import com.example.backend.service.CheckoutService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/checkout")
@CrossOrigin(origins = "http://localhost:4200")
public class CheckoutController {
private final CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }
    @Operation(summary = "Add a purchase")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("purchase")
    public PurchaseResponse purchaseResponse(@RequestBody Purchase purchase){
        return this.checkoutService.placeOrder(purchase);
    }
}
