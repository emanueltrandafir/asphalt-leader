package com.asphalt_leader.utils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

import com.asphalt_leader.persistance.model.User;

@Component
public class UserUtils {

	public static final int PASSWROD_MIN_LENGTH = 6;
	
	public static final String[] PASSWORD_REQUIRED_CHARACTERS 
		= { "~" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "+" , "_" , "|" , "?" , ">" , "<" };

	private static final String[] PASSWORD_REQUIRED_NUMBERS = {"1","2","3","4","5","6","7","8","9","0"};
	
	public List<String> validateUser(User user) {
		List<String> issues = new ArrayList<>();

		issues.addAll(validateEmail(user.getEmail()));
		issues.addAll(validatePassword(user.getPassword()));
		
		return issues ;
	}
	
	
	
	private List<String> validateEmail(String email) {
		List<String> issues = new ArrayList<>();
		
		if(!email.contains("@")) {
			issues.add("Invalid email address!");
		}
		
		return issues;
	}
	
	private List<String> validatePassword(String password){
		List<String> issues = new ArrayList<>();
		
		if(password.length() < PASSWROD_MIN_LENGTH) {
			issues.add("The password is too short, it should have at least " + PASSWROD_MIN_LENGTH + " characters");
		}
		
		if( ListUtils.intersect(
				Arrays.asList( password.split("") ), Arrays.asList( PASSWORD_REQUIRED_CHARACTERS ) ).size() == 0  ) {

			issues.add("The password is too weak, it should have at least on special character such as : " + specialCharctersJoinedByComma());
		}
		
		if( ListUtils.intersect(
				Arrays.asList( password.split("") ), Arrays.asList( PASSWORD_REQUIRED_NUMBERS ) ).size() == 0   ) {
			issues.add("The password is too weak, it should have at least one number.");
		}
		
		return issues ;
	}

	private String specialCharctersJoinedByComma() {
		return String.join(", " , Arrays.asList( PASSWORD_REQUIRED_CHARACTERS ));
	}
	
}
