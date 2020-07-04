package com.asphalt_leader.service;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.reset;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;

import com.asphalt_leader.persistance.model.User;
import com.asphalt_leader.persistance.repository.UserRepository;
import com.asphalt_leader.utils.UserUtils;


public class EmailAuthServiceTest {

	private UserService userService;
	private UserRepository mockUserRepo = mock(UserRepository.class);;
	private UserUtils mockUserUtils = mock(UserUtils.class);
	private Md5HashService hashService = new Md5HashService(); 
	
	private User dummyUser;
	private EmailAuthService emailAuthServie = new EmailAuthService(hashService, mockUserUtils, mockUserRepo, new JwtService());
	
	@BeforeAll
	private static void beforeAll() {}
	
	
	@BeforeEach
	private void beforeEach() {
		
		dummyUser = new User("user", "password#1", "a@b.c");
		
		reset(mockUserRepo, mockUserUtils);

		AuthServiceFactory authFactory = new AuthServiceFactory();
		authFactory.setEmailAuth(emailAuthServie);
		
		userService = new UserService(authFactory);
	}

	
	@Test
	public void saveShouldHashUsersPassword() {

		//given
		when(mockUserRepo.findById(dummyUser.getEmail()))
			.thenReturn( Optional.empty());
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
	public void loginShouldFindUser() throws IllegalAccessException {
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
		assertThrows(IllegalAccessException.class, () -> { userService.login(dummyUser); } );
	}
	
	@Test
	public void loginShouldThrowExceptionWrongPassword() {

		//given
		User dbUser = new User(dummyUser.getUsername(), hashService.hashString("otherDummyPassword"), dummyUser.getEmail());
		when(mockUserRepo.findById(dummyUser.getEmail()))
				.thenReturn(Optional.empty());
		
		//when
		assertThrows(IllegalAccessException.class, () -> { userService.login(dummyUser); } );
	}
}
