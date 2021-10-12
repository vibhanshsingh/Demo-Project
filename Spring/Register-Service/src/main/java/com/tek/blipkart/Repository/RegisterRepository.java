package com.tek.blipkart.Repository;

import com.tek.blipkart.Entity.RegisterUser;
import org.springframework.data.repository.CrudRepository;

public interface RegisterRepository extends CrudRepository <RegisterUser, Integer>{

    public RegisterUser findByFirstName(String firstName);

}