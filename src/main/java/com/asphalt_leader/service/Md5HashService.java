package com.asphalt_leader.service;

import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

@Service
public class Md5HashService {

	
	public String hashString( String text ) {
	    return DigestUtils.md5DigestAsHex(text.getBytes()).toUpperCase();
	}
	
}

