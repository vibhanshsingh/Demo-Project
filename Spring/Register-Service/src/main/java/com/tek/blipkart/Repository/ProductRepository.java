package com.tek.blipkart.Repository;

import com.tek.blipkart.Entity.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Integer> {

}
