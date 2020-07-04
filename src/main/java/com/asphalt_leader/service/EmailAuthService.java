package com.asphalt_leader.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asphalt_leader.persistance.model.User;
import com.asphalt_leader.persistance.repository.UserRepository;
import com.asphalt_leader.utils.UserUtils;

@Service
public class EmailAuthService extends AuthService {

	private Md5HashService hashService; 
	private UserUtils userUtils;
	

	@Autowired
	public EmailAuthService(Md5HashService hashService, UserUtils userUtils, 
			UserRepository userRepo, JwtService jwtService) {
		super(jwtService, userRepo);
		this.hashService = hashService;
		this.userUtils = userUtils;
	}


	@Override
	protected boolean authentificateUser(User userInput) {

		
			
		Optional<User> userFromDb = userRepo.findById(userInput.getEmail());

		if(userFromDb.isPresent()) {
			return hashService
					.hashString(userInput.getPassword())
					.equals( userFromDb.get().getPassword() );
		}
		return false;
	} 
	
	
	@Override
	protected User updateUserPrePersist(User user) {
		
		String unhashedPass = user.getPassword();
		user.setPassword( hashService.hashString( unhashedPass ));
		return user;
	}


	@Override
	public User registerUser(User user) {
		
		List<String> issues = userUtils.validateUser(user);
		if(issues.size() > 0) {
			String reason = new StringBuilder()
				.append("[\"")
				.append(String.join(" \",\" ", issues))
				.append("\"]")
				.toString();
			throw new IllegalArgumentException(reason);
		}
		return super.registerUser(user);
	}
	
	

}
