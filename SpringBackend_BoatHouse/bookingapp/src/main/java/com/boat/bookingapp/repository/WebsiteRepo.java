package com.boat.bookingapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boat.bookingapp.model.Website;

public interface WebsiteRepo extends JpaRepository<Website, Long>{
   
}