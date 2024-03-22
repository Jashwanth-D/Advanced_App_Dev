package com.boat.bookingapp.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
public class Boat {
  @GetMapping("/hello")
  public String Hello() {
      return "Hello World !";
  }
  

}
