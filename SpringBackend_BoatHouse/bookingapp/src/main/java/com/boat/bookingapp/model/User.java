package com.boat.bookingapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table (name = "m_user")
@Data

public class User {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long uid;
    private String email;
    private String password;

}