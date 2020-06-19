package com.asphalt_leader.service;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class Md5HashServiceTest {
	
	private Md5HashService service = new Md5HashService();
	
	@Test
	public void hashStringShouldReturnCorrectValue() {

		//given
		String password = "ILoveJava";
		String hash = "35454B055CC325EA1AF2126E27707052";

		//when
		String result = service.hashString(password);
		
		//then
		assertEquals( result, hash ); 
	}
	
}
