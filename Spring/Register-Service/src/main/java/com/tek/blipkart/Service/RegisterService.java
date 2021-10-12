package com.tek.blipkart.Service;

import com.tek.blipkart.Entity.RegisterUser;
import com.tek.blipkart.Repository.RegisterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {

    @Autowired
    private RegisterRepository repository;

    public RegisterService() { }

    public RegisterService(RegisterRepository repository) {
        super();
        this.repository = repository;
    }


    public RegisterUser saveRegisteredUser(RegisterUser user) {
        repository.save(user);
        return user;
    }

    public RegisterUser findByFirstName(String firstName) {
        return repository.findByFirstName(firstName);
    }

}
