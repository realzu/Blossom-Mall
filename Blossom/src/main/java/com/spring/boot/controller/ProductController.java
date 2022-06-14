package com.spring.boot.controller;

import java.io.File;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.spring.boot.dto.ImagesDTO;
import com.spring.boot.dto.ProductDTO;
import com.spring.boot.mapper.ImagesMapper;
import com.spring.boot.mapper.ProductMapper;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.Date;
import java.util.List;

 
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/product")
public class ProductController {
 
    @Autowired
    ProductMapper productMapper;
    
    @Autowired
    ImagesMapper imagesMapper;
    
    @PostMapping("/uploadFiles")
	public ResponseEntity<Object> uploadFiles(MultipartFile[] multipartFiles, String stringProductDTO) { // 파라미터의 이름은 client의 formData key값과 동일해야함
		String UPLOAD_PATH = "D:\\React\\work\\blossom\\public\\images\\product"; // 업로드 할 위치
		System.out.println("FileUpload");
		System.out.println(stringProductDTO);
		System.out.println(multipartFiles[0].getOriginalFilename());
		
		try {
			// 객체는 client에서 직렬화를 하여 전달
			ProductDTO ProductDTO = new ObjectMapper().readValue(stringProductDTO, ProductDTO.class); // String to Object
			System.out.println("FileUpload");
			System.out.println("ProductDTO = " + ProductDTO);
			System.out.println("ProductDTO name = " + ProductDTO.getP_name());
			
			//for문 밖에선 product table 등록
			//ProductNum를 여기서 가져와야함
			//maxnum Pnum 해서 구함 쿼리문
			//상품도 여기서 하면 됨
			int p_num = productMapper.maxNum() + 1;
			ProductDTO.setP_num(p_num);
			productMapper.insertProduct(ProductDTO);
			
			for(int i=0; i<multipartFiles.length; i++) {
				//image table 등록
				ImagesDTO ImagesDTO = new ImagesDTO();		
				MultipartFile file = multipartFiles[i];
                
				//추가로 ProductNum 추가 해야함
				//처음이 썸네일로 사용
				String saveFileName = (new Date().getTime()) + "" + (file.getOriginalFilename()); // 현재 날짜와 랜덤 정수값으로 새로운 파일명 만들기
				String originName = file.getOriginalFilename(); // ex) 파일.jpg
				String fileExtension = originName.substring(originName.lastIndexOf(".") + 1); // ex) jpg
				originName = originName.substring(0, originName.lastIndexOf(".")); // ex) 파일
				long fileSize = file.getSize(); // 파일 사이즈
				String filePath = UPLOAD_PATH + "\\" + saveFileName;
				
//				File fileSave = new File(UPLOAD_PATH, saveFileName + "." + fileExtension); // ex) saveFileName.jpg
				File fileSave = new File(UPLOAD_PATH, saveFileName);
				if(!fileSave.exists()) { // 폴더가 없을 경우 폴더 만들기
					fileSave.mkdirs();
				}
                
				file.transferTo(fileSave); // fileSave의 형태로 파일 저장
				
				System.out.println("saveFileName= " + saveFileName);
				System.out.println("originName= " + originName);
				System.out.println("fileExtension= " + fileExtension);
				System.out.println("fileSize= " + fileSize);
				System.out.println("filePath= " + filePath);
				
				int i_num = imagesMapper.maxNum(p_num);
				ImagesDTO.setP_num(p_num);
				ImagesDTO.setI_num(i_num + 1);
				System.out.println(i_num);
				ImagesDTO.setI_save(saveFileName);
				ImagesDTO.setI_origin(originName);
				ImagesDTO.setI_filepath(filePath);
				imagesMapper.insertImage(ImagesDTO);
			}
			
		} catch(IOException e) {
			System.out.println(e);
			return new ResponseEntity<Object>(null, HttpStatus.CONFLICT);
		}
		
		return new ResponseEntity<Object>("Success", HttpStatus.OK);
	}
    
    @GetMapping
	public List<ProductDTO> getLists() throws Exception{
        System.out.println(productMapper.getLists());
        System.out.println("상품 리스트 출력 성공이드앙!!!");
        
        return productMapper.getLists();
    }
	
  //상품 목록 썸네일 페이지
  	@GetMapping("/productThumb/{p_num}")
  	public ProductDTO getReadData(@PathVariable int p_num) throws Exception {
  		System.out.println(productMapper.getReadData(p_num));
  		ProductDTO readData = productMapper.getReadData(p_num);
  		updateHitCount(p_num);
  		System.out.println("상세페이지");
          return readData;
  	}
  	
    //상품 목록 상세 페이지
  	@GetMapping("/productDetail/{p_num}")
  	public ProductDTO getReadData2(@PathVariable int p_num) throws Exception {
  		System.out.println(productMapper.getReadData2(p_num));
  		ProductDTO readData = productMapper.getReadData2(p_num);
  		updateHitCount(p_num);
  		System.out.println("상세페이지");
          return readData;
  	}
  	
  	//상품 목록 상세 페이지
  	//조회수 증가
  	@PostMapping("/productDetail/{p_num}")
  	public int updateHitCount(@PathVariable int p_num) throws Exception{
  		int hc = productMapper.updateHitCount(p_num);
  		return hc;
  	}
    
}