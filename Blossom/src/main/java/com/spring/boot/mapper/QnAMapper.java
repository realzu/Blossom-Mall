package com.spring.boot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.spring.boot.dto.QnADTO;

@Mapper
public interface QnAMapper {
	
	public void insertQnAData(QnADTO dto) throws Exception;

	public List<QnADTO> getReadQnAData();
}
