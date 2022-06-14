package com.spring.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.dto.MainDTO;
import com.spring.boot.mapper.MainMapper;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/main")
public class MainController {
	
	@Autowired
	MainMapper mainMapper;	
	
	@GetMapping("/best") //★경로안줘도 ㄱㅊ?
	public List<MainDTO> proByBest(){
		System.out.println("베스트상품 조회!");
		return mainMapper.proBest();
	}	
	
	@GetMapping("/new")
	public List<MainDTO> proByNew(){
		System.out.println("신상품 조회!");
		return mainMapper.proNew();
	}
	
	@GetMapping("/tag")
	public List<MainDTO> proByTag(){
		System.out.println("태그상품 조회!");
		return mainMapper.proTag();
	}	

}
