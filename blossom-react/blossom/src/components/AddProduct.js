import axios from 'axios';
import React, { Component } from 'react';
import ApiService from '../service/ApiService';
import faq from '../assets/css/faq.module.css'

class AddProduct extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          p_name: '',
          p_price: '',
          p_rate: '',
          p_tag: 'lovely',
          p_color: 'black',
          p_brand: 'soap',
          p_cate1: '아우터',
          p_cate2: '패딩',
          message : null
        }
      }
    
      onChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value //우린 const {value,name} = e.target 해서 한 단계 더있는느낌
        })
        console.log(this.state)
      }
    
      saveProduct = (e) => {
        e.preventDefault(); // 이건 왜했지? 굳이 필요한가 싶음 사이트 이동이 되는데 아래 history.push 나중에 빼볼것
        //안하면 AddUser가 새로고침됨
    
        // let products = {
        //   name: this.state.name
        // }
    
        // ApiService.addProduct(products)
        // .then( res => {
        //     this.setState({
        //       message: products.name + '이 성공적으로 등록되었습니다.'
        //     })
        //     console.log(this.state.message);
        // })
        // .catch( err => {
        //   console.log('saveProduct() 에러', err);
        // });

        this.onFileUpload();
        // this.props.history.push('/users'); // push가 안되면 message가 남아 있으려나??
        window.location.replace('/products');
      }

      fileList = []; // 업로드한 파일들을 저장하는 배열

      onSaveFiles = (e) => {
          const uploadFiles = Array.prototype.slice.call(e.target.files); // 파일선택창에서 선택한 파일들
  
          uploadFiles.forEach((uploadFile) => {
              this.fileList.push(uploadFile);
          });
      };
  
      onFileUpload = () => {
          const formData = new FormData();
  
          this.fileList.forEach((file) => {
              // 파일 데이터 저장
              formData.append('multipartFiles', file); //multipartFiles가 key이름
          });
  
          // 객체
          const ProductDTO = {
            p_name: this.state.p_name,
            p_price: this.state.p_price,
            p_rate: this.state.p_rate,
            p_tag: this.state.p_tag,
            p_color: this.state.p_color,
            p_brand: this.state.p_brand,
            p_cate1: this.state.p_cate1,
            p_cate2: this.state.p_cate2,
          };
  
          formData.append('stringProductDTO', JSON.stringify(ProductDTO)); // 직렬화하여 객체 저장
  
          axios.post('http://localhost:8080/product/uploadFiles', formData);
          
      };
    
      render(){
          
        return(
          <div className={faq.container}>
          <div className={faq.box}>
            <h2>상품 등록</h2>
            <form>
              <div className={faq.label}>
                <label >상품명:</label>
                <input type="text" placeholder="상품명" className={faq.input} name="p_name" value={this.state.p_name} onChange={this.onChange} />
              </div>
              <div className={faq.label}>
                <label>가격:</label>
                <input type="text" placeholder="가격" className={faq.input} name="p_price" value={this.state.p_price} onChange={this.onChange} />
              </div>
              <div className={faq.label}>
                <label>할인율:</label>
                <input type="text" placeholder="할인율" className={faq.input} name="p_rate" value={this.state.p_rate} onChange={this.onChange} />
              </div>
              <div className={faq.label}>
                <label>태그:</label>
                <select name="p_tag" className={faq.input} value={this.state.p_tag} onChange={this.onChange}>
                  <option>lovely</option>
                  <option>casual</option>
                  <option>feminine</option>
                  <option>romantic</option>
                  <option>basic</option>
                  <option>cute</option>
                  <option>sports</option>
                  <option>campus</option>
                  <option>luxury</option>
               </select>
              </div>
              <div className={faq.label}>
                <label>색상:</label>
                <select name="p_color" className={faq.input} value={this.state.p_color} onChange={this.onChange}>
                  <option>black</option>
                  <option>white</option>
                  <option>gray</option>
                  <option>red</option>
                  <option>orange</option>
                  <option>yellow</option>
                  <option>green</option>
                  <option>blue</option>
                  <option>indigo</option>
                  <option>purple</option>
                </select>
              </div>
              <div className={faq.label}>
                <label>브랜드:</label>
                <select name="p_brand" className={faq.input} value={this.state.p_brand} onChange={this.onChange}>
                  <option>soap</option>
                  <option>나이키</option>
                  <option>아디다스</option>
                  <option>스컬프터</option>
                  <option>마르디</option>
                  <option>구찌</option>
                  <option>디올</option>
                  <option>프라다</option>
                  <option>제이에스티나</option>
                  <option>닥터마틴</option>
                  <option>게스언더웨어</option>
                </select>
              </div>
              <div className={faq.label}>
                <label>대분류:</label>
                <select name="p_cate1" className={faq.input} value={this.state.p_cate1} onChange={this.onChange}>
                  <option>아우터</option>
                  <option>상의</option>
                  <option>하의</option>
                  <option>원피스</option>
                  <option>신발</option>
                  <option>잡화</option>
                  <option>이너웨어</option>
                </select>
              </div>
              <div className={faq.label}>
                <label>소분류:</label>
                { this.state.p_cate1==='아우터' && 
                <select name="p_cate2" className={faq.input} value={this.state.p_cate2} onChange={this.onChange}>
                  <option>소분류 무조건 고를것!!!!!!!!!!!!</option>
                  <option>패딩</option>
                  <option>코트</option>
                  <option>가디건</option>
                  <option>자켓/플리스/블레이저</option>
                </select>}

                { this.state.p_cate1==='상의' && 
                <select name="p_cate2" className={faq.input} value={this.state.p_cate2} onChange={this.onChange}>
                  <option>소분류 무조건 고를것!!!!!!!!!!!!</option>
                  <option>긴팔</option>
                  <option>반팔</option>
                  <option>니트</option>
                  <option>블라우스</option>
                  <option>맨투맨</option>
                  <option>민소매</option>
                </select>}

                { this.state.p_cate1==='하의' && 
                <select name="p_cate2" className={faq.input} value={this.state.p_cate2} onChange={this.onChange}>
                  <option>소분류 무조건 고를것!!!!!!!!!!!!</option>
                  <option>청바지</option>
                  <option>슬렉스</option>
                  <option>면바지</option>
                  <option>반바지</option>
                  <option>스포츠</option>
                  <option>스커트</option>
                </select>}

                { this.state.p_cate1==='원피스' && 
                <select name="p_cate2" className={faq.input} value={this.state.p_cate2} onChange={this.onChange}>
                  <option>소분류 무조건 고를것!!!!!!!!!!!!</option>
                  <option>미니</option>
                  <option>미디</option>
                  <option>롱</option>
                </select>}

                { this.state.p_cate1==='신발' && 
                <select name="p_cate2" className={faq.input} value={this.state.p_cate2} onChange={this.onChange}>
                  <option>소분류 무조건 고를것!!!!!!!!!!!!</option>
                  <option>운동화</option>
                  <option>구두</option>
                  <option>슬리퍼</option>
                  <option>샌들</option>
                </select>}

                { this.state.p_cate1==='잡화' && 
                <select name="p_cate2" className={faq.input} value={this.state.p_cate2} onChange={this.onChange}>
                  <option>소분류 무조건 고를것!!!!!!!!!!!!</option>
                  <option>가방</option>
                  <option>악세서리</option>
                  <option>모자</option>
                </select>}

                { this.state.p_cate1==='이너웨어' && 
                <select name="p_cate2" className={faq.input} value={this.state.p_cate2} onChange={this.onChange}>
                  <option>소분류 무조건 고를것!!!!!!!!!!!!</option>
                  <option>잠옷</option>
                  <option>속옷</option>
                  <option>양말</option>
                </select>}
                
              </div>
    
              <input type="file" multiple /* 파일 여러개 선택 가능하게 하기 */ onChange={this.onSaveFiles} />

              <button onClick={this.saveProduct}>물품 추가</button>
    
            </form>
          </div>
          </div>
        );
    }
}

export default AddProduct;