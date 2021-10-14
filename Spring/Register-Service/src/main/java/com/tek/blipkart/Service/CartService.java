package com.tek.blipkart.Service;

import com.tek.blipkart.Entity.Cart;
import com.tek.blipkart.Entity.Product;
import com.tek.blipkart.Repository.CartRepository;
import com.tek.blipkart.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private Cart cart;

    public void addToCart(int productID) {

        Optional<Product> product = productRepository.findById(productID);
        Cart cart = cartRepository.findByProduct(product);
        cart.setProductID(productID);
        cart.setOrderPlaced(false);
        // Not Yet Completed

    }



}
