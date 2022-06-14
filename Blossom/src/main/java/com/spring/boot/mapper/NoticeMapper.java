package com.spring.boot.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.spring.boot.dto.NoticeDTO;
 
@Mapper
public interface NoticeMapper {
 
    List<NoticeDTO> noticeList();
    NoticeDTO fetchNoticeByNum(int num);
    void updateNotice(NoticeDTO notice);
    void insertNotice(NoticeDTO notice);
    void deleteNotice(int num);
    int maxNum();
}