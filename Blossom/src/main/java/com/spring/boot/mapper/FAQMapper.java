package com.spring.boot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.spring.boot.dto.FAQDTO;
 
@Mapper
public interface FAQMapper {
 
    List<FAQDTO> faqList();
    FAQDTO fetchFaqByNum(int num);
    void updateFaq(FAQDTO faq);
    void insertFaq(FAQDTO faq);
    void deleteFaq(int num);
    int maxNum();
}