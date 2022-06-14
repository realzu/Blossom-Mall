package com.spring.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.dto.CouponDTO;
import com.spring.boot.mapper.CouponMapper;


@CrossOrigin(origins = "*", maxAge = 3600)

@RestController

@RequestMapping("/coupon")
public class CouponController {

	@Autowired
	CouponMapper couponMapper;
	
	@GetMapping("/list")
	public List<CouponDTO> list() throws Exception{
		return couponMapper.couponList();
	}

}
