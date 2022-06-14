package com.spring.boot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.spring.boot.dto.ProductDTO;

@Mapper
public interface ProductMapper {
 
    int maxNum();
    void insertProduct(ProductDTO ProductDTO);
	int updateHitCount(int p_num) throws Exception;
	public List<ProductDTO> getLists() throws Exception;
	public ProductDTO getReadData(int p_num) throws Exception;
	public ProductDTO getReadData2(int p_num) throws Exception;
    
}