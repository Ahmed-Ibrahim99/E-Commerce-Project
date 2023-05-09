package com.example.backend.dto;

import com.example.backend.model.Address;
import com.example.backend.model.Customer;
import com.example.backend.model.Order;
import com.example.backend.model.OrderItem;
import lombok.Data;

import java.util.Set;
@Data
public class Purchase {
    private Customer customer;
    private Address shippingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
