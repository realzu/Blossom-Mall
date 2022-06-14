package com.spring.boot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.spring.boot.dto.ProductDTO;

@Mapper
public interface ListMapper {
 
	public List<ProductDTO> getListsCate1(String p_cate1) throws Exception;
	public List<ProductDTO> getListsCate2(String p_cate2) throws Exception;
    
}