package com.asphalt_leader.controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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

	@CrossOrigin(origins = "*")
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser( @RequestBody User user ) {
		try {
			return new ResponseEntity<>( userService.register(user) , HttpStatus.CREATED );
		} catch ( IllegalArgumentException e ) {
			return new ResponseEntity<>( e.getMessage() , HttpStatus.BAD_REQUEST );
		} catch ( Exception e ) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/login")
	public ResponseEntity<?> loginUser( @RequestBody User user ) {
		try {
			return new ResponseEntity<>( userService.login(user) , HttpStatus.CREATED );
		} catch ( NoSuchElementException e ) {
			return new ResponseEntity<>( e.getMessage() , HttpStatus.NOT_FOUND );
		} catch ( Exception e ) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	

	@CrossOrigin(origins = "*")
	@GetMapping()
	public List<User> getUsers() {
		return  StreamSupport.stream(userRepo.findAll().spliterator(), false)
				.collect(Collectors.toList());
	}
	
}
