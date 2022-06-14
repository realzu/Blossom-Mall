package com.spring.boot.mapper;

import java.util.List;
import org.apache.ibatis.annotations.Mapper;

import com.spring.boot.dto.UserDTO;

@Mapper
public interface UserMapper {
	
	//회원가입
	public void insertUser(UserDTO user);
	
	//아이디_확인
	public UserDTO userById(String m_id);
	
	//회원정보 수정
	public void updateUser(UserDTO user);
	
	public void updatePwd(UserDTO user);
	
	
	
	/*
	//mapper 명령어랑 같아야함
	
	public int maxNum() throws Exception;
	
	//리스트
	public List<UserDTO> userList();
	
	public void insertData(LoginDTO dto) throws Exception;
	
	public int getDataCount(String searchKey, String searchValue) throws Exception;
	
	public List<LoginDTO> getLists(int start, int end, String searchKey, String searchValue) throws Exception;

	public void updateHitCount(int num) throws Exception;
	
	public LoginDTO getReadData(int num) throws Exception;
	
	public void updateData(LoginDTO dto) throws Exception;
	
	public void deleteData(int num) throws Exception;
	*/	
}
