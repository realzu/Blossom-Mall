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

import com.spring.boot.dto.NoticeDTO;
import com.spring.boot.mapper.NoticeMapper;
 
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/notice")
public class NoticeController {
 
    @Autowired
    NoticeMapper noticeMapper;
    
    @GetMapping
    public List<NoticeDTO> faqList(){
        System.out.println(noticeMapper.noticeList());
        System.out.println("공지리스트 출력 성공");
        return noticeMapper.noticeList();
    }
    
    @PostMapping
    void insertFaq(@RequestBody NoticeDTO notice) {
    	notice.setN_num(noticeMapper.maxNum() + 1);
    	noticeMapper.insertNotice(notice);
        System.out.println("공지 DB 저장 성공");
    }
    
    @GetMapping("/{num}") 
    public NoticeDTO fetchNoticeByID(@PathVariable int num) {
        System.out.println(noticeMapper.fetchNoticeByNum(num));
        NoticeDTO fetchNotice = noticeMapper.fetchNoticeByNum(num);
        return fetchNotice;
    }
    
    @PutMapping("/{num}")
    public void updateNotice(@PathVariable int num, @RequestBody NoticeDTO notice) {
        NoticeDTO updateNotice = notice;
        System.out.println("업데이트 공지 => " + updateNotice);
        
        updateNotice.setN_title(notice.getN_title());
        updateNotice.setN_contents(notice.getN_contents());
        
        noticeMapper.updateNotice(updateNotice); 
    }
    
    @DeleteMapping("/{num}")
    public void deleteNotice(@PathVariable int num) {
    	noticeMapper.deleteNotice(num);
        System.out.println("공지 삭제, 성공적");
    }
    
}