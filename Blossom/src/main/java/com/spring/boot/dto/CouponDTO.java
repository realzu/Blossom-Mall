package com.spring.boot.dto;

public class CouponDTO {
	
	private String M_ID;
	private int C_NUM;
	private String C_NAME;
	private int C_DIS;
	private String C_DATE;
	
	public CouponDTO() {
		
	}
	public String getM_ID() {
		return M_ID;
	}
	public void setM_ID(String m_ID) {
		M_ID = m_ID;
	}
	public int getC_NUM() {
		return C_NUM;
	}
	public void setC_NUM(int c_NUM) {
		C_NUM = c_NUM;
	}
	public String getC_NAME() {
		return C_NAME;
	}
	public void setC_NAME(String c_NAME) {
		C_NAME = c_NAME;
	}
	public int getC_DIS() {
		return C_DIS;
	}
	public void setC_DIS(int c_DIS) {
		C_DIS = c_DIS;
	}
	public String getDATE() {
		return C_DATE;
	}
	public void setDATE(String dATE) {
		C_DATE = dATE;
	}
	
	
}
