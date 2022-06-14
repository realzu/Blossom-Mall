package com.spring.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.dto.UserDTO;
import com.spring.boot.mapper.UserMapper;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController //@ResponseBody붙이지않아도 문자열,JSON 전송 가능
@RequestMapping("/user") //요청에 대해 어떤 Controller,메소드 처리할지 맵핑위한 어노테이션
public class UserController {
	
	@Autowired
    UserMapper userMapper;
    
    @PostMapping //Post주소 맵핑
    public void insertUser(@RequestBody UserDTO user) { //get은 ResponseBody, post는 RequestBody로 받음
    	System.out.println("회원가입 완료♥");
    	userMapper.insertUser(user);
    }
    
    @GetMapping("/{m_id}")
    public UserDTO userById(@PathVariable String m_id) {
    	System.out.println( "by아이디 조회 완료♥");
    	return userMapper.userById(m_id);
    } 
        
    @PutMapping
    public void updateUser(@RequestBody UserDTO user) {
    	System.out.println("회원정보 수정~");
    	userMapper.updateUser(user);
    }
    
    @PutMapping("/pwd")
    public void updatePwd(@RequestBody UserDTO user) {
    	System.out.println("회원 비밀번호 수정~");
    	userMapper.updatePwd(user);
    }
    
}
