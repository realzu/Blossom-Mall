package com.spring.boot.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.spring.boot.dto.ImagesDTO;

@Mapper
public interface ImagesMapper {
 
    int maxNum(int p_num);
    void insertImage(ImagesDTO ImageDTO);
}