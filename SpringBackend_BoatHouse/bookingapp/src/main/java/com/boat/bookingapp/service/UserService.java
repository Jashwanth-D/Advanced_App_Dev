package com.boat.bookingapp.service;

import com.boat.bookingapp.dto.request.UserCreateRequest;
import com.boat.bookingapp.dto.request.UserUpdateRequest;
import com.boat.bookingapp.model.User;

public interface UserService {

    User createUser(UserCreateRequest registerRequest);
    User updateUser(Long userId, UserUpdateRequest userUpdateRequest);
    public void deleteUser(Long userId) ;
    public User getUserById(Long userId);

}