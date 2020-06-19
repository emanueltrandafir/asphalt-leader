package com.asphalt_leader.service;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.reset;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.ArgumentMatcher;
import org.mockito.ArgumentMatchers;

import com.asphalt_leader.persistance.model.User;
import com.asphalt_leader.persistance.repository.UserRepository;


public class UserServiceTest {

	private UserService userService;
	private UserRepository mockUserRepo = mock(UserRepository.class);;
	private Md5HashService hashService = new Md5HashService(); //mock(HashingService.class);;
	private User dummyUser;
	private int dummyUserId;
	
	@BeforeAll
	private static void beforeAll() {}
	
	
	@BeforeEach
	private void beforeEach() {
		
		dummyUser = new User("user", "password", "a@b.c");
		dummyUserId = 1;
		
		reset(mockUserRepo);
		
		userService = new UserService(mockUserRepo, hashService);
	}

	
	@Test
	public void saveShouldHashUsersPassword() {

		//given
		String unhashedPassword = dummyUser.getPassword();
		
		//when
		userService.save( dummyUser );
		
		//then
		verify(mockUserRepo).save( ArgumentMatchers.argThat( 
				u -> !u.getPassword().equals(unhashedPassword)));	
	}
	
	@Test
	public void saveShouldAddDefaultUsernameIfNotPresent() {
		
		//given
		int dummyUserId = 1;
		dummyUser = new User(null, "password", "a@b.c");
		when(mockUserRepo.save(dummyUser))
			.thenReturn( new User( dummyUserId , dummyUser.getUsername() , dummyUser.getPassword(), dummyUser.getEmail() ));
		
		//when
		userService.save( dummyUser );
		
		//then
		verify(mockUserRepo).save( ArgumentMatchers.argThat( 
				u -> u.getUsername() != null ));	
	}
	

	@Test
	public void saveShouldPersistUser() {
		
		//given
		when(mockUserRepo.save(dummyUser))
			.thenReturn( new User( dummyUserId , dummyUser.getUsername() , dummyUser.getPassword(), dummyUser.getEmail() ));
		
		//when
		userService.save( dummyUser );
		
		//then
		verify(mockUserRepo).save( ArgumentMatchers.argThat( 
				u -> u.getEmail().equals(dummyUser.getEmail())));
	}
	
	@Test
	public void saveShouldValidateUserInput() {
		
	}
}
