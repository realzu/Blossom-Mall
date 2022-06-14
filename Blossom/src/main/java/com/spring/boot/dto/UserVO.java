package com.spring.boot.dto;

import lombok.Data;

@Data
public class UserVO {
 
    int id;
    String username;
    String password;
    String firstName;
    String lastName;
    int age;
    int salary;
    
}