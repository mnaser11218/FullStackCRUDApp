package com.example.demo;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
@Configuration
public class PersonConfig {
    @Autowired
    private PersonRepository repository;

    @PostConstruct
    public void setup() {
        Person person1 = new Person();
        person1.setFirstName("testing first name 1");
        person1.setLastName("testing last name");

        Person person2 = new Person();
        person2.setFirstName("test 2");
        person1.setLastName("test last 2");

        repository.saveAll(Arrays.asList(
                person1,
                person2
        ));
    }
}
