package com.spring.boot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;import org.apache.ibatis.io.ResolverUtil.Test;

import com.spring.boot.dto.MypageDTO;
import com.spring.boot.dto.TestDTO;

@Mapper
public interface MypageMapper {
	
	public TestDTO getReadData(int num) throws Exception;
	
	public List<MypageDTO> getList();
	
	public MypageDTO getId(String m_id);
}
