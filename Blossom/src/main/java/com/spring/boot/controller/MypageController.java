package com.spring.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.dto.MypageDTO;
import com.spring.boot.dto.TestDTO;
import com.spring.boot.mapper.MypageMapper;

@CrossOrigin(origins = "*", maxAge = 3600)


@RestController

@RequestMapping("/mypage")
public class MypageController {
	
	@Autowired
	MypageMapper mypageMapper;
	
	@GetMapping("/list/{m_id}")
	public List<MypageDTO> list() throws Exception{
		return mypageMapper.getList();
	}
	
	@GetMapping("{m_id}")
	public MypageDTO getid(@PathVariable String m_id) {
		return mypageMapper.getId(m_id);
	}


}
