package com.asphalt_leader.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asphalt_leader.persistance.model.User;
import com.asphalt_leader.persistance.repository.UserRepository;
import com.asphalt_leader.utils.UserUtils;

@Service
public class UserService {
	
	
	private UserRepository userRepo;
	private Md5HashService hashServce;
	private UserUtils userUtils;
	private JwtService jwtService;
	private StravaOauthService stravaOauthService;
	
	@Autowired
	public UserService(UserRepository userRepo, Md5HashService hashServce, UserUtils userUtils, JwtService jwtService) {
		this.userRepo = userRepo;
		this.hashServce = hashServce;
		this.userUtils = userUtils;
		this.jwtService = jwtService;
	}


	@Autowired
	protected void setStravaOauthService(StravaOauthService stravaOauthService) {
		this.stravaOauthService = stravaOauthService;
	}


	public User register(User user) {
		
		if(user.getEmail().contains("@strava")) {
			return stravaOauthService.registerUser(user);
		}
		
		List<String> issues = userUtils.validateUser(user);
		
		if(issues.size() > 0) {
			String reason = new StringBuilder()
				.append("[\"")
				.append(String.join(" \",\" ", issues))
				.append("\"]")
				.toString();
			throw new IllegalArgumentException(reason);
		}
		
		if( userRepo.findById(user.getEmail()).isPresent() ) {
			throw new IllegalArgumentException("[ \"this email address is already used!\" ]");
		}
		
		String unhashedPass = user.getPassword();
		user.addDefaultUsernameIfMissing();
		user.setPassword( hashServce.hashString( unhashedPass ));
		
		return userRepo.save(user);
	}
	
	
	
	public String login(User userDto) {
		
		if(userDto.getEmail().contains("@strava")) {
			return stravaOauthService.loginUser(userDto);
		}
		
		Optional<User> user = userRepo.findById(userDto.getEmail());

		if(!user.isPresent()) {
			throw new NoSuchElementException("the user was not found!");
		}
		
		String hashedPassword = hashServce.hashString( userDto.getPassword() );
		if( !hashedPassword.equals(user.get().getPassword()) ){
			throw new IllegalArgumentException("the password is wrong!");
		}
		
		return "{ \"token\" : \"" + jwtService.provideAccessToken(user.get()) + "\" }";
	}
	
	
	

}
