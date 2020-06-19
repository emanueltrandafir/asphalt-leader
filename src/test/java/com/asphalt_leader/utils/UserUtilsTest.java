package com.asphalt_leader.utils;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;

import com.asphalt_leader.persistance.model.User;

public class UserUtilsTest {

	
//	private final User userWithWrongEmail = new User("user", "pass#123", )

	private final String shortPassword = "p#1";
	private final String shortPasswordWithoutNumber = "pass#";
	private final String okPassword = "pass#123";
	private final String badEmail = "dummy.com";
	private final String okEmail = "dummy@yahoo.com";
	
	@Test
	public void validateUserWithBadEmailShouldReturnOneIssue() {
		//given
		User user = new User("username", okPassword, badEmail);
		
		//when
		List<String> issues = UserUtils.validateUser(user);
		
		//then
		assertEquals(issues.size(), 1);
	}
	
	@Test
	public void validateUserWithShouldReturnTwoIssues() {
		//given
		User user = new User("username", shortPassword, badEmail);
		
		//when
		List<String> issues = UserUtils.validateUser(user);
		
		//then
		assertEquals(issues.size(), 2);
	}
	
	@Test
	public void validateUserWithShouldReturnThreeIssues() {
		//given
		User user = new User("username", shortPasswordWithoutNumber, badEmail);
		
		//when
		List<String> issues = UserUtils.validateUser(user);
		
		//then
		assertEquals(issues.size(), 3);
	}

	@Test
	public void validateUserShouldReturnNoIssues() {
		//given
		User user = new User("username", okPassword, okEmail);
		
		//when
		List<String> issues = UserUtils.validateUser(user);
		
		//then
		assertEquals(issues.size(), 0);
	}
	
	
}
