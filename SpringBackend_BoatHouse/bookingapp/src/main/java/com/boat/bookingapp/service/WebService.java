package com.boat.bookingapp.service;

import java.util.List;

import com.boat.bookingapp.dto.request.SiteRequest;
import com.boat.bookingapp.dto.response.SiteResponse;
import com.boat.bookingapp.model.Website;

public interface WebService {

    List<SiteResponse> getSiteData();

    String addSiteData(Website siteRequest);

    SiteResponse updateSiteData(SiteRequest siteRequest, Long id);

}