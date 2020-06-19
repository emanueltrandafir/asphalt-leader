package com.asphalt_leader.service;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.reset;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.NoSuchElementException;
import java.util.Optional;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.ArgumentMatcher;
import org.mockito.ArgumentMatchers;

import com.asphalt_leader.persistance.model.User;
import com.asphalt_leader.persistance.repository.UserRepository;
import com.asphalt_leader.utils.UserUtils;


public class UserServiceTest {

	private UserService userService;
	private UserRepository mockUserRepo = mock(UserRepository.class);;
	private UserUtils mockUserUtils = mock(UserUtils.class);
	private Md5HashService hashService = new Md5HashService(); 
	
	private User dummyUser;
	private int dummyUserId;
	
	@BeforeAll
	private static void beforeAll() {}
	
	
	@BeforeEach
	private void beforeEach() {
		
		dummyUser = new User("user", "password#1", "a@b.c");
		dummyUserId = 1;
		
		reset(mockUserRepo, mockUserUtils);
		
		userService = new UserService(mockUserRepo, hashService, mockUserUtils, new JwtService());
	}

	
	@Test
	public void saveShouldHashUsersPassword() {

		//given
		String unhashedPassword = dummyUser.getPassword();
		
		//when
		userService.register( dummyUser );
		
		//then
		verify(mockUserRepo).save( ArgumentMatchers.argThat( 
				u -> !u.getPassword().equals(unhashedPassword)));	
	}
	
	@Test
	public void saveShouldAddDefaultUsernameIfNotPresent() {
		
		//given
		dummyUser = new User(null, "password", "a@b.c");
		when(mockUserRepo.save(dummyUser))
			.thenReturn( dummyUser );
		
		//when
		userService.register( dummyUser );
		
		//then
		verify(mockUserRepo).save( ArgumentMatchers.argThat( 
				u -> u.getUsername() != null ));	
	}
	

	@Test
	public void saveShouldPersistUser() {
		
		//given
		when(mockUserRepo.save(dummyUser))
			.thenReturn( dummyUser );
		
		//when
		userService.register( dummyUser );
		
		//then
		verify(mockUserRepo).save( ArgumentMatchers.argThat( 
				u -> u.getEmail().equals(dummyUser.getEmail())));
	}
	
	@Test
	public void saveShouldValidateUserInput() {
		//when
		userService.register( dummyUser );
		
		//then
		verify(mockUserUtils).validateUser(dummyUser);
	}
	
	@Test
	public void loginShouldFindUser() {
		//given
		User dbUser = new User(dummyUser.getUsername(), hashService.hashString(dummyUser.getPassword()), dummyUser.getEmail());
		when(mockUserRepo.findById(dummyUser.getEmail()))
				.thenReturn(Optional.of( dbUser ));
		
		//when
		userService.login( dummyUser );
		
		//then
		verify(mockUserRepo).findById(dummyUser.getEmail());
	}
	
	@Test
	public void loginShouldThrowExceptionIfNotFound() {

		//given
		User dbUser = new User(dummyUser.getUsername(), hashService.hashString(dummyUser.getPassword()), dummyUser.getEmail());
		when(mockUserRepo.findById(dummyUser.getEmail()))
				.thenReturn(Optional.empty());
		
		//when
		assertThrows(NoSuchElementException.class, () -> { userService.login(dummyUser); } );
	}
	
	@Test
	public void loginShouldThrowExceptionWrongPassword() {

		//given
		User dbUser = new User(dummyUser.getUsername(), hashService.hashString("otherDummyPassword"), dummyUser.getEmail());
		when(mockUserRepo.findById(dummyUser.getEmail()))
				.thenReturn(Optional.empty());
		
		//when
		assertThrows(NoSuchElementException.class, () -> { userService.login(dummyUser); } );
	}
}
