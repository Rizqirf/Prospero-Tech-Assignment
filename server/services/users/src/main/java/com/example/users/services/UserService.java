package com.example.users.services;

import com.example.users.collection.User;

import java.util.List;

public interface UserService {
    String save(User user);

    List<User> getUsers();

    void deleteUser(String id);

    User updateUser(String id, User user);
}
