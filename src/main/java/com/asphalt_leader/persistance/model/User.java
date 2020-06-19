package com.asphalt_leader.persistance.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.sun.istack.NotNull;

import lombok.Data;

@Data
@Entity(name = "user_entity")
@Table(name = "user_entity")
public class User {

	private String username;
	
	@NotNull
	private String password;
	
	@Id
	@NotNull
	private String email;

	public User() {};
	
	public User(String username, String password, String email) {
		this.username = username;
		this.password = password;
		this.email = email;
	}

	public void addDefaultUsernameIfMissing() {
		if (username == null || username.isEmpty()) {
			username = email.split("@")[0];
		}
	}
	
}
