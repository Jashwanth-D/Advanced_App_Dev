package com.boat.bookingapp.dto.request;

import com.boat.bookingapp.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class UserCreateRequest {
    private String name;
    private String email;
    private String password;
    private Role role;
}