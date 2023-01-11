package com.example.users.repository;

import com.example.users.collection.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends MongoRepository<User,String> {

    List<User> findAll();
    User findBy_id(String _id);
}
