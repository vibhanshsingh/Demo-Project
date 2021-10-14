package com.tek.blipkart.Controller;

import com.tek.blipkart.Entity.Product;
import com.tek.blipkart.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping(value = "/product")
@CrossOrigin
public class ProductController {

    @Autowired
    private ProductService service;

    @PostMapping(value = "/add")
    public ResponseEntity addProduct(@RequestBody Product product) {
        Product addedProduct = service.saveProduct(product);
        return new ResponseEntity(addedProduct, HttpStatus.CREATED);
    }

    @PostMapping(value = "/addAll")
    @Transactional
    public ResponseEntity addAllProduct(@RequestBody List<Product> product) {
        List<Product> addedProduct = service.saveAllProduct(product);
        return new ResponseEntity(addedProduct, HttpStatus.CREATED);
    }

    @GetMapping(value = "/getProducts")
    public Iterable<Product> showAllProduct() {
        return service.findProducts();
    }

}