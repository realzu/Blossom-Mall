package com.spring.boot.dto;

import lombok.Data;

@Data
public class ProductDTO {

	int p_num;
    String p_name;
    String p_date;
    int p_price;
    int p_rate;
    String p_tag;
    String p_color;
    String p_brand;
    String p_cate1;
    String p_cate2;
    int hitcount;
    String i_origin;
	String i_save;
	String i_filepath;
	String i_num;
}