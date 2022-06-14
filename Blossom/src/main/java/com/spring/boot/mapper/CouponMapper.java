package com.spring.boot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.spring.boot.dto.CouponDTO;

@Mapper
public interface CouponMapper {
	
	public List<CouponDTO> couponList();

}
