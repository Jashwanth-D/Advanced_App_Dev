package com.boat.bookingapp.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class SiteRequest {
    private String siteEmail;
    private String siteContact;
    private String siteAddress;
    private String siteX;
    private String siteYoutube;
    private String siteFacebook;
    private boolean siteMaintenanceMode;
}