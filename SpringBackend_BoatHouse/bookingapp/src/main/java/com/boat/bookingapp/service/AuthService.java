package com.boat.bookingapp.service;

import com.boat.bookingapp.dto.request.LoginRequest;
import com.boat.bookingapp.dto.request.RegisterRequest;
import com.boat.bookingapp.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);

    String createAdmin();
}