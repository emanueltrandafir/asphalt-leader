package com.asphalt_leader.persistance.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.asphalt_leader.persistance.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer>{

}
