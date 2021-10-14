package com.tek.blipkart.Service;
import com.tek.blipkart.Entity.Product;
import com.tek.blipkart.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repository;

    public ProductService(){}

    public ProductService(ProductRepository repository) {
        super();
        this.repository = repository;
    }
    public Product saveProduct(Product product) {
        return repository.save(product);
    }

    public List<Product> saveAllProduct(List<Product> product) {
        return (List<Product>) repository.saveAll(product);
    }

    public Iterable<Product> findProducts(){
        return repository.findAll();
    }




}
