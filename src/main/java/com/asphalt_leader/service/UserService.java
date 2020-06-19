package com.asphalt_leader.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asphalt_leader.persistance.model.User;
import com.asphalt_leader.persistance.repository.UserRepository;
import com.asphalt_leader.utils.UserUtils;

@Service
public class UserService {
	
	private UserRepository userRepo;
	private Md5HashService hashServce;

	@Autowired
	public UserService(UserRepository userRepo, Md5HashService hashServce) {
		this.userRepo = userRepo;
		this.hashServce = hashServce;
	}

	public User save(User user) {
		
		List<String> issues = UserUtils.validateUser(user);
		
		if(issues.size() > 0) {
			String reason = new StringBuilder()
				.append("[")
				.append("\"")
				.append(String.join(" \",\" ", issues))
				.append("\"")
				.append("]")
				.toString();
			throw new IllegalArgumentException(reason);
		}
		
		user.addDefaultUsernameIfMissing();
		
		user.setPassword( hashServce.hashString(user.getPassword()) );
		
		return userRepo.save(user);
		
	}
	
	
	

}
