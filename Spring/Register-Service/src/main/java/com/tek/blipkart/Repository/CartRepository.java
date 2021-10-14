package com.tek.blipkart.Repository;

import com.tek.blipkart.Entity.Cart;
import com.tek.blipkart.Entity.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface CartRepository extends CrudRepository<Cart,Long> {

    Cart findByProduct(Optional<Product> product);

}
