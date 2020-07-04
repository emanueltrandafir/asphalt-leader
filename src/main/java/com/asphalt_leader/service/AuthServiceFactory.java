package com.asphalt_leader.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.asphalt_leader.persistance.model.User;

@Component
public class AuthServiceFactory {

	private StravaOauthService stravaAuth;
	private EmailAuthService emailAuth;

	
	@Autowired
	public void setStravaAuth(StravaOauthService stravaAuth) {
		this.stravaAuth = stravaAuth;
	}
	
	@Autowired
	public void setEmailAuth(EmailAuthService emailAuth) {
		this.emailAuth = emailAuth;
	}


	public AuthService getAuthService( User user ) {
		
		if( user.getEmail().contains("@strava")) {
			return stravaAuth;
		}
		
		return emailAuth;
	}
	
}
