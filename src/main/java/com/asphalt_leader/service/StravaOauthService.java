package com.asphalt_leader.service;

import org.springframework.stereotype.Service;

import com.asphalt_leader.persistance.model.User;

@Service
public class StravaOauthService {

	
	
	public String loginUser(User user) {
		return ""; // TODO: return jwt token
	}
	
	public User registerUser(User user) {
		return null; // TODO persist
	}
	
	private boolean validateOauthToken( String token ) {
		return false; // TODO
	}
	
}
