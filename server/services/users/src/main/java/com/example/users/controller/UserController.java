package com.example.users.controller;

import com.example.users.collection.User;
import com.example.users.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public String save(@RequestBody User user) {
        return userService.save(user);
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.getUsers();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id){
        userService.deleteUser(id);
    }

    @PutMapping("/{id}")
    public User update(@PathVariable String id,@RequestBody User user){
        return userService.updateUser(id,user);
    }
}

