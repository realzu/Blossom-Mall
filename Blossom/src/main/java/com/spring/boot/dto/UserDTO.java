package com.spring.boot.dto;

import lombok.Data;

@Data
public class UserDTO {

	private String m_id;
	private String m_pwd;
	private String m_name;	
	private String m_tel;
	private String m_email;
	
	private String m_addr1;
	private String m_addr2;
	private String m_addr3;
	
	private int m_year;
	private int m_month;
	private int m_day;
	
	private String date;

	private int m_point;
	private int m_out;		
	
	private String m_salt;
	private String m_enPwd;
}