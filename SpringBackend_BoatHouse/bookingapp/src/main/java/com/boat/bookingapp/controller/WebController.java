package com.boat.bookingapp.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boat.bookingapp.dto.request.SiteRequest;
import com.boat.bookingapp.model.Website;
import com.boat.bookingapp.service.WebService;

import io.micrometer.common.lang.NonNull;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;    
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/web")
@Tag(name = "Website", description = "Endpoints for social media")
@RequiredArgsConstructor
public class WebController {

    private final WebService webService;
    
    @GetMapping("/sites")
    @Operation(summary = "Retrieve social media data", description = "Retrieves dynamic user data from social media sites for display on the website's contact page or footer.")
    public ResponseEntity<?> getSiteData() {
        return new ResponseEntity<>(webService.getSiteData(), OK);
    }

    @PostMapping("/add/site")
    @Operation(summary = "Add new social media site", description = "Adds data for a new social media site.")
    public ResponseEntity<?> addSiteData(@NonNull @RequestBody Website siteRequest){
        return new ResponseEntity<>(webService.addSiteData(siteRequest), OK);
    }

    @PatchMapping("/update/site")
    @Operation(summary = "Update social media site", description = "Updates data for an existing social media site.")
    public ResponseEntity<?> updateSiteData(@RequestBody SiteRequest siteRequest, @PathVariable Long id){
        return new ResponseEntity<>(webService.updateSiteData(siteRequest, id), OK);
    }
}