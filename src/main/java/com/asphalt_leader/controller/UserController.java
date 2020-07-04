package com.asphalt_leader.controller;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.jboss.logging.Logger.Level;
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

import java.util.logging.Logger; 


@RestController
@RequestMapping("/auth")
public class UserController {

	private final static Logger LOGGER = Logger.getLogger(UserController.class.getName());
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private UserRepository userRepo;

	@CrossOrigin(origins = "*")
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser( @RequestBody User user ) {
		
		LOGGER.info("UserController.registerUser(): " + user.getEmail());
		
		try {
			return new ResponseEntity<>( userService.register(user) , HttpStatus.CREATED );
		} catch ( IllegalArgumentException e ) {
			
			LOGGER.severe("UserController.registerUser(): bad request : " + e.getMessage() + " ; " + user.getEmail()); 
			return new ResponseEntity<>( e.getMessage() , HttpStatus.BAD_REQUEST );
		} catch ( Exception e ) {
			
			LOGGER.severe("UserController.registerUser(): server error : " + e.getMessage() + " ; " + user.getEmail()); 
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@CrossOrigin(origins = "*")
	@PostMapping("/login")
	public ResponseEntity<?> loginUser( @RequestBody User user ) {

		LOGGER.info("UserController.loginUser(): " + user.getEmail());
		
		try {
			String token = userService.login(user);
			String json = "{ \"token\" : \"" + token + "\" }";
			
			return new ResponseEntity<>( json , HttpStatus.CREATED );
		} catch ( NoSuchElementException | IllegalArgumentException e  ) {

			LOGGER.severe("UserController.loginUser(): login failed : " + e.getMessage() + " ; " + user.getEmail()); 
			return new ResponseEntity<>( e.getMessage() , HttpStatus.NOT_FOUND );
		} catch ( Exception e ) {

			LOGGER.severe("UserController.loginUser(): server error : " + e.getMessage() + " ; " + user.getEmail()); 
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
