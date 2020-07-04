package com.asphalt_leader.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asphalt_leader.persistance.model.User;
import com.asphalt_leader.persistance.repository.UserRepository;

@Service
public abstract class AuthService {
	
	private JwtService jwtservice;
	protected UserRepository userRepo;
	
	@Autowired
	public AuthService(JwtService jwtservice, UserRepository userRepo) {
		this.jwtservice = jwtservice;
		this.userRepo = userRepo;
	}

	protected abstract boolean authentificateUser(User user);

	protected abstract User updateUserPrePersist(User user);
	
	public String loginUser( User user ) throws IllegalAccessException {
		if( authentificateUser( user ) ) {
			return jwtservice.provideAccessToken(user);
		}
		throw new IllegalAccessException( "Authentificaton failed!" );
	}
	

	public User registerUser( User user ) {
		if( userRepo.findById(user.getEmail()).isPresent() ) {
			throw new IllegalArgumentException("[ \"this email address is already used!\" ]");
		}

		user.addDefaultUsernameIfMissing();
		user = updateUserPrePersist(user);
		
		return userRepo.save(user);
	}


	
}
