package com.asphalt_leader.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.fail;

import java.security.InvalidKeyException;
import java.security.Key;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.RSAPrivateKeySpec;
import java.util.Base64;

import org.junit.jupiter.api.Test;

import com.google.gson.Gson;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import javassist.expr.NewArray;
import sun.security.rsa.RSAPublicKeyImpl;




import java.util.Date;

import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.*;
import com.nimbusds.jose.jwk.*;
import com.nimbusds.jose.jwk.gen.*;
import com.nimbusds.jwt.*;




public class JwtServiceTest {

	private static final String TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlNzWnNCTmhaY0YzUTlTNHRycFFCVEJ5TlJSSSIsImtpZCI6IlNzWnNCTmhaY0YzUTlTNHRycFFCVEJ5TlJSSSJ9.eyJhdWQiOiJodHRwczovL3BheS5iaXplcmJhLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzI4OTg3OTJiLWM2NDQtNDIwNy1iYjc4LWEwOGY1NTVkZWY2Yy8iLCJpYXQiOjE1OTMwOTk1NTksIm5iZiI6MTU5MzA5OTU1OSwiZXhwIjoxNTkzMTAzNDU5LCJhaW8iOiJFMkJnWURCSWRwYWFvUlJmL2JCY1FibnhSOWwwQUE9PSIsImFwcGlkIjoiYWI2YTFmMjItNmFlOS00NmI0LWJiMDktOGQ2OTg0MTkzZTFlIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMjg5ODc5MmItYzY0NC00MjA3LWJiNzgtYTA4ZjU1NWRlZjZjLyIsIm9pZCI6ImE4MDI4ZWU3LWQ4MzMtNGVhYy1iZjRkLThhMzgyN2FhNTZlNyIsInJvbGVzIjpbImFjY2Vzc0JpemVyYmFQYXkiXSwic3ViIjoiYTgwMjhlZTctZDgzMy00ZWFjLWJmNGQtOGEzODI3YWE1NmU3IiwidGlkIjoiMjg5ODc5MmItYzY0NC00MjA3LWJiNzgtYTA4ZjU1NWRlZjZjIiwidXRpIjoia2ExQVd5emZwRWlyUjBjUVhTOEpBUSIsInZlciI6IjEuMCJ9.TSYgMHWe5ZOhf3nIIFhP4JFovrgjKSDuprlPSesJyQ_U29Op_DMmOM6RVQwWr4x5FzYnJlRrLo1w7GkQ80jTZziH6OQLxukOLVZT0fqzgdlP9luSkSyyidgdkGKUr6pR4MGi_Ndu3g_B3uF1Soz8vmkLbTGB2BhXTOE8Vknzs-vEypoUW5vVW4TU_XOYJO_q0qKbvnCBvXGy-pd7jNNPD5BjyxswGCg4q66xjD6fe0-i34zscY6OTKA_8R_akQyv_qoubqmIFRCO8Hd0OXfBrCE3y_WS2PLA_9WK0INkNogTIGXFp4a3IaeBn5LrmfEAZPb9syyiTAo5Vj0Z96X5AA";

	@Test
	public void test() {
	
		try {
			
			SignedJWT parsed = SignedJWT.parse( TOKEN );
			
			JWTClaimsSet jwtClaimsSet = parsed.getJWTClaimsSet();
	
			System.out.println( jwtClaimsSet.getAudience() );
			System.out.println( jwtClaimsSet.getClaim("roles") ); 
			
			System.out.println( jwtClaimsSet.getIssueTime() );  
			System.out.println( jwtClaimsSet.getExpirationTime() ); 
			
			System.out.println( "\n" + new Gson().toJson(jwtClaimsSet) );
		
		} catch (Exception e) {
			
			e.printStackTrace();
			fail();
			
		}
		
	}



}
