package com.asphalt_leader.service;
 

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.asphalt_leader.persistance.model.User;
import com.asphalt_leader.persistance.repository.UserRepository;

@Service
public class StravaOauthService extends AuthService {
 
	private static final String STRAVA_BASE_URL = "https://www.strava.com/api/v3";
	private HttpClient httpclient = HttpClients.createDefault();

	
	public StravaOauthService(JwtService jwtservice, UserRepository userRepo) {
		super(jwtservice, userRepo);
	}
	

	@Override
	protected boolean authentificateUser(User user) { 
		Optional<User> userFromDb = userRepo.findById(user.getEmail());
		
		if( userFromDb.isPresent() ) {
			return validateOauthToken(user.getPassword());
		}

		throw new NoSuchElementException(" There is no account registered for this Strava account. Try singing up first! ");
	}
	

	private boolean validateOauthToken( String token ) {
		
		try {
			HttpGet httppost = new HttpGet(STRAVA_BASE_URL + "/athlete");
			httppost.addHeader("Authorization", "Bearer " + token);
	
			HttpResponse response = httpclient.execute(httppost);
			HttpEntity entity = response.getEntity();
			 
			String json = new BufferedReader(new InputStreamReader( entity.getContent() ))
					.lines()
					.collect(Collectors.joining("\n"));
		
			System.out.println( "User's data from strava: " + json );
			
			return response.getStatusLine().getStatusCode() == HttpStatus.OK.value();
			
		} catch (IOException e) {
			return false;
		}
	}


	@Override
	protected User updateUserPrePersist(User user) {
		user.setPassword("");
		user.addDefaultUsernameIfMissing();
		return user;
	}



	
	
}
