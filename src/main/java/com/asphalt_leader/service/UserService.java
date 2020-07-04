package com.asphalt_leader.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asphalt_leader.persistance.model.User;

@Service
public class UserService {
	
	private AuthServiceFactory authServceFactory;
	
	@Autowired
	public UserService( AuthServiceFactory authServceFactory ) {
		this.authServceFactory = authServceFactory;
	}
	

	public User register(User user) {
		return authServceFactory
				.getAuthService(user)
				.registerUser(user);
	}
	

	public String login(User user) throws IllegalAccessException {
		return authServceFactory
				.getAuthService(user)
				.loginUser(user);
	}
	
	
	

}
