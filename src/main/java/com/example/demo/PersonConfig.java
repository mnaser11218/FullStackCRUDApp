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
        person1.setFirstName("Leon");
        person1.setLastName("Hunter");

        Person person2 = new Person();
        person2.setFirstName("John");
        person1.setLastName("Doe");

        repository.saveAll(Arrays.asList(
                person1,
                person2
        ));
    }
}
