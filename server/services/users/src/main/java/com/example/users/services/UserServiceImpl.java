package com.example.users.services;

import com.example.users.collection.User;
import com.example.users.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepo userRepo;
    @Override
    public String save(User user) {
        return userRepo.save(user).get_id();
    }

    @Override
    public List<User> getUsers() {
        return userRepo.findAll();
    }
    @Override
    public void deleteUser(String id) {
        userRepo.deleteById(id);
    }
    @Override
    public User updateUser(String id, User user) {

        User existingUser = userRepo.findBy_id(id);
        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        existingUser.setPassword(user.getPassword());
        existingUser.setRole(user.getRole());
        return userRepo.save(existingUser);

    }

}
