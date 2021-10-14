package com.tek.blipkart.Controller;

import com.tek.blipkart.Entity.RegisterUser;
import com.tek.blipkart.Service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

    @RestController
    @RequestMapping(value = "/")
    @CrossOrigin
    public class RegisterController {

    @Autowired
    private RegisterService service;

    @PostMapping(value = "/register")
    public ResponseEntity registerUser(@RequestBody RegisterUser user) {
        RegisterUser savedUser = service.saveRegisteredUser(user);
        return new ResponseEntity(savedUser, HttpStatus.CREATED);
    }

    @GetMapping(value = "/search/{firstName}")
    public RegisterUser searchUser(@PathVariable (name = "firstName") String firstName) {
        return service.findByFirstName(firstName);
    }

}