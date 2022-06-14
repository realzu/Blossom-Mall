package com.spring.boot.mapper;

import org.apache.ibatis.annotations.Mapper;
import com.spring.boot.dto.ImagesTestDTO;

@Mapper
public interface ImagesTestMapper {
 
    int maxNum();
    void insertImage(ImagesTestDTO ImageTestDTO);
}