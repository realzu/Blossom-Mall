package com.spring.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.boot.dto.FAQDTO;
import com.spring.boot.mapper.FAQMapper;
 
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/faq")
public class FAQController {
 
    @Autowired
    FAQMapper faqMapper;
    
    @GetMapping
    public List<FAQDTO> faqList(){
        System.out.println(faqMapper.faqList());
        System.out.println("FAQ리스트 출력 성공");
        return faqMapper.faqList();
    }
    
    @PostMapping
    void insertFaq(@RequestBody FAQDTO faq) {
    	faq.setF_num(faqMapper.maxNum() + 1);
    	faqMapper.insertFaq(faq);
        System.out.println("FAQ DB 저장 성공");
    }
    
    @GetMapping("/{num}") //
    public FAQDTO fetchUserByID(@PathVariable int num) {
        System.out.println(faqMapper.fetchFaqByNum(num));
        FAQDTO fetchFaq = faqMapper.fetchFaqByNum(num);
        return fetchFaq;
    }
    
    @PutMapping("/{num}")
    public void updateFaq(@PathVariable int num, @RequestBody FAQDTO faq) {
        FAQDTO updateFaq = faq;
        System.out.println("업데이트 FAQ => " + updateFaq);
        
        updateFaq.setF_title(faq.getF_title());
        updateFaq.setF_contents(faq.getF_contents());
        
        faqMapper.updateFaq(updateFaq); 
    }
    
    @DeleteMapping("/{num}")
    public void deleteFaq(@PathVariable int num) {
        faqMapper.deleteFaq(num);
        System.out.println("FAQ 삭제, 성공적");
    }
    
}