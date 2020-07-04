package com.asphalt_leader.service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Base64;
import java.util.Date;

import org.springframework.stereotype.Service;

import com.asphalt_leader.persistance.model.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

	private static final long TOKEN_EXPIRATION_MINS = 5;
	private static final String SECRET = "bXlfc2VjcmV0X2VuY29kZWRfYmFzZTY0XzMyY2hhcnM="; //my_secret_encoded_base64_32chars
	
	public String provideAccessToken( User user ){
		
		Instant now = Instant.now();
		
		byte[] secret = Base64
				.getDecoder()
				.decode(SECRET);
		
		return Jwts.builder()
				.setSubject( user.getEmail() )
				.setIssuedAt( Date.from(now) )
				.setExpiration( Date.from(now.plus(TOKEN_EXPIRATION_MINS, ChronoUnit.MINUTES)) )
				.signWith(Keys.hmacShaKeyFor(secret))
				.compact();
		
	}
	

	public Jws<Claims> parseToken( String token ){
		return parseToken( token , SECRET );
	}
	
	public Jws<Claims> parseToken( String token, String secret ) {

		byte[] byteArr = Base64
			.getDecoder()
			.decode(secret);
		
		return Jwts.parser()
			.setSigningKey(Keys.hmacShaKeyFor(byteArr))
			.parseClaimsJws(token);
		
	}

}
