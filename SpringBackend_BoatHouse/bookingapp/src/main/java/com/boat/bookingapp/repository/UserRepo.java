package com.boat.bookingapp.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.boat.bookingapp.model.User;

public interface UserRepo extends JpaRepository<User, Long> {

    public  Optional<User> findByEmail(String email);
}