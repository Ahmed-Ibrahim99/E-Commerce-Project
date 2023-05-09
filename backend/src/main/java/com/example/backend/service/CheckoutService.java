package com.example.backend.service;

import com.example.backend.dto.Purchase;
import com.example.backend.dto.PurchaseResponse;
import com.example.backend.model.Customer;
import com.example.backend.model.Order;
import com.example.backend.model.OrderItem;
import com.example.backend.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import java.util.Set;
import java.util.UUID;

@Service
public class CheckoutService {
    private final CustomerRepository customerRepository;

    public CheckoutService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public PurchaseResponse placeOrder(Purchase purchase) {
        //retrieve the order from dto
        Order order = purchase.getOrder();

        //generate tracking number
        String orderTrackingNumber = generateTrackingNumber();
        order.setTrackingNumber(orderTrackingNumber);

        //populate order with orderItems
        Set<OrderItem> orderItems = purchase.getOrderItems();
        orderItems.forEach(order::add);

        //populate order with shipping address
        order.setShippingAddress(purchase.getShippingAddress());

        //populate customer with order
        Customer customer = purchase.getCustomer();
        customer.add(order);

        //save to database
        customerRepository.save(customer);

        //return a response(tracking number)
        return new PurchaseResponse(orderTrackingNumber);
    }

    private String generateTrackingNumber() {
        long timestamp = System.currentTimeMillis() / 1000; // Divide by 1000 to get seconds instead of milliseconds
        String uuid = UUID.randomUUID().toString().substring(0, 6); // Use a 6-character UUID prefix

        return String.format("%d-%s", timestamp, uuid);
    }
}
