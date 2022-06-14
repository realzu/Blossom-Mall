package com.spring.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.dto.QnADTO;
import com.spring.boot.mapper.QnAMapper;

@CrossOrigin(origins = "*", maxAge = 3600)


@RestController

@RequestMapping("/QnA")
public class QnAController {
	
	@Autowired
	QnAMapper qnaMapper;
	
	@PostMapping("/write")
	public void insertQnAData(@RequestBody QnADTO dto) throws Exception {
		qnaMapper.insertQnAData(dto);
	}
	
	@GetMapping("/read")
	public List<QnADTO> getReadQnAData() throws Exception {
		return qnaMapper.getReadQnAData();
	} 
	

}
