package com.example.demo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PersonRepository extends CrudRepository<Person, Long> {
//    @Query(value = "SELECT * FROM user_profile where user_name =?1", nativeQuery = true)
//    public UserProfile getUserProfileByUserName(String string);

    @Query(value="SELECT * from person where first_name =?1", nativeQuery = true)
     List<Person> getPersonsByFirstName(String string);



}
