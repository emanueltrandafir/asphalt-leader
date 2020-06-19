package com.asphalt_leader.controller;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asphalt_leader.persistance.model.User;
import com.asphalt_leader.persistance.repository.UserRepository;
import com.asphalt_leader.service.UserService;

@RestController
@RequestMapping("/auth")
public class UserController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepo;
	
	@PostMapping()
	public ResponseEntity<?> registerUser( @RequestBody User user ) {
		try {
			return new ResponseEntity<>( userService.save(user) , HttpStatus.CREATED );
		} catch ( IllegalArgumentException e ) {
			return new ResponseEntity<>( e.getMessage() , HttpStatus.BAD_REQUEST );
		} catch ( Exception e ) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping()
	public List<User> getUsers() {
		return  StreamSupport.stream(userRepo.findAll().spliterator(), false)
				.collect(Collectors.toList());
	}
	
}
