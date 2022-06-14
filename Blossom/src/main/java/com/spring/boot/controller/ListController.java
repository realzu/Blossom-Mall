package com.spring.boot.controller;

import java.io.File;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.spring.boot.dto.ImagesDTO;
import com.spring.boot.dto.ProductDTO;
import com.spring.boot.mapper.ImagesMapper;
import com.spring.boot.mapper.ListMapper;
import com.spring.boot.mapper.ProductMapper;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.Date;
import java.util.List;

 
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping
public class ListController {
 
    @Autowired
    ListMapper listMapper;
    
    @Autowired
    ProductMapper productMapper;
    
  //상품 목록 헤더
  	@GetMapping("/cate1/{p_cate1}")
  	public List<ProductDTO> getListsCate1(@PathVariable String p_cate1) throws Exception {
  		System.out.println(p_cate1);
          return listMapper.getListsCate1(p_cate1);
  	}
  	
  	@GetMapping("/cate2/{p_cate2}")
  	public List<ProductDTO> getListsCate2(@PathVariable String p_cate2) throws Exception {
          return listMapper.getListsCate2(p_cate2);
  	}
  	
  	
}