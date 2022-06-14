package com.spring.boot.dto;

import lombok.Data;

@Data
public class MainDTO {
	
	//product 테이블
	int p_num;
    String p_name;
    String p_date;
    int p_price;
    int p_rate;
    String p_tag;
    String p_color;
    String p_cate1;
    String p_cate2;
    String p_brand;
    int hitCount;
    
    //images 테이블
    int i_num;
    String i_save;
}
