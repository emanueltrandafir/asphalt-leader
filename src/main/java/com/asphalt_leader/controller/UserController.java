package com.asphalt_leader.controller;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asphalt_leader.persistance.model.User;
import com.asphalt_leader.persistance.repository.UserRepository;

@RestController
@RequestMapping("/auth")
public class UserController {

	@Autowired
	private UserRepository userRepo;
	
	@PostMapping()
	public User registerUser( @RequestBody User user ) {
		return userRepo.save(user);
	}
	
	@GetMapping()
	public List<User> getUsers() {
		return  StreamSupport.stream(userRepo.findAll().spliterator(), false)
				.collect(Collectors.toList());
	}
	
}
