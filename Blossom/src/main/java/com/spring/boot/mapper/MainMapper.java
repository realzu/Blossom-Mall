package com.spring.boot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.spring.boot.dto.MainDTO;

@Mapper
public interface MainMapper {

	public List<MainDTO> proBest();
	
	public List<MainDTO> proNew();
	
	public List<MainDTO> proTag();
	
}
