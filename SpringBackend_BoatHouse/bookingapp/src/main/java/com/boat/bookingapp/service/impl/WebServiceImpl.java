package com.boat.bookingapp.service.impl;

import java.util.List;
import java.util.function.Consumer;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;

import com.boat.bookingapp.dto.request.SiteRequest;
import com.boat.bookingapp.dto.response.SiteResponse;
import com.boat.bookingapp.model.Website;
import com.boat.bookingapp.repository.WebsiteRepo;
import com.boat.bookingapp.service.WebService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class WebServiceImpl implements WebService{
    @Autowired
    private final WebsiteRepo websiteRepo;

    @Override
    public List<SiteResponse> getSiteData() {
        return websiteRepo.findAll().stream().map(site -> SiteResponse.builder()
                    .wid(site.getWid())
                    .siteEmail(site.getSiteEmail())
                    .siteContact(site.getSiteContact())
                    .siteAddress(site.getSiteAddress())
                    .siteFacebook(site.getSiteFacebook())
                    .siteX(site.getSiteX())
                    .siteYoutube(site.getSiteYoutube())
                    .siteMaintenanceMode(site.isSiteMaintenanceMode())
                    .build()).collect(Collectors.toList());
    }
@Override
    public String addSiteData(Website web) {
        if (websiteRepo.count() > 10) {
            return "More than 10 record is present";
        }

        // var siteData = Website.builder()
        //                 .siteEmail(siteRequest.getSiteEmail())
        //                 .siteContact(siteRequest.getSiteContact())
        //                 .siteAddress(siteRequest.getSiteAddress())
        //                 .siteFacebook(siteRequest.getSiteFacebook())
        //                 .siteX(siteRequest.getSiteX())
        //                 .siteYoutube(siteRequest.getSiteYoutube())
        //                 .siteMaintenanceMode(false).build();
        System.out.println(web);
        websiteRepo.save(web);
        return "Site record added successfully.";
    }

    @Override
    public SiteResponse updateSiteData(SiteRequest siteRequest, Long id) {
        Website existingSite = websiteRepo.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Site with id " + id + " not found"));

        updateField(siteRequest.getSiteEmail(), existingSite::setSiteEmail);
        updateField(siteRequest.getSiteContact(), existingSite::setSiteContact);
        updateField(siteRequest.getSiteAddress(), existingSite::setSiteAddress);
        updateField(siteRequest.getSiteX(), existingSite::setSiteX);
        updateField(siteRequest.getSiteYoutube(), existingSite::setSiteYoutube);
        updateField(siteRequest.getSiteFacebook(), existingSite::setSiteFacebook);

        if (siteRequest.isSiteMaintenanceMode()) {
            existingSite.setSiteMaintenanceMode(true);
        }

        Website updatedSite = websiteRepo.save(existingSite);
        return mapToResponse(updatedSite);
    }

    private void updateField(@Nullable String newValue, Consumer<String> setter) {
        if (newValue != null) {
            setter.accept(newValue);
        }
    }

    private SiteResponse mapToResponse(Website website) {
        return SiteResponse.builder()
                .wid(website.getWid())
                .siteEmail(website.getSiteEmail())
                .siteContact(website.getSiteContact())
                .siteAddress(website.getSiteAddress())
                .siteX(website.getSiteX())
                .siteYoutube(website.getSiteYoutube())
                .siteFacebook(website.getSiteFacebook())
                .siteMaintenanceMode(website.isSiteMaintenanceMode())
                .build();
    }

}