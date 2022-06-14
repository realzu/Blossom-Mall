package com.spring.boot.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.spring.boot.dto.ProductTestDTO;

@Mapper
public interface ProductTestMapper {
 
    int maxNum();
    void insertProduct(ProductTestDTO ProductTestDTO);
    
}