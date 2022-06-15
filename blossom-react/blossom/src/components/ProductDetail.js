import React, { Component } from 'react';
import styles from '../assets/css/ProductDetail.module.css';
import Numeral from 'numeral';
import { BsCart4 , BsList} from 'react-icons/bs';
import axios from 'axios';

class ProductDetail extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          products: [],
          products2: [],
          message: null
        }
      }
    
      componentDidMount(){
        this.loadProduct();
        console.log('여기까지는 왔어1')
      }
    
      //데이터 읽어오기
      loadProduct = () => {
        const p_num = this.props.match.params.p_num
        axios.get(`http://localhost:8080/product/productThumb/${p_num}`)
          .then( res => {
            let product = res.data;
            this.setState({
                p_num: product.p_num,
                p_name: product.p_name,
                p_date: product.p_date,
                p_price: product.p_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
                p_rate: product.p_rate,
                p_tag: product.p_tag,
                p_cate1: product.p_cate1,
                p_cate2: product.p_cate2,
                p_color: product.p_color,
                p_brand: product.p_brand,
                hitcount: product.hitcount,
                i_save: product.i_save,
                p_Test : product.p_price * (product.p_rate * 0.01),
                p_Test2 : product.p_price - this.state.p_Test 
                // {product.p_Price * (product.p_Rate * 0.01)}
            })
          })
          .catch(err => {
            console.log('loadproduct() 에러', err);
            console.log(this.setState.p_name);
          });
        axios.get(`http://localhost:8080/product/productDetail/${p_num}`)
          .then(res => {
            let product2 = res.data;
            this.setState({
              i_save2: product2.i_save
            })
          })
      }

      addOrders = () => {
        this.props.history.push('/add-orders');
      }

      productList = () => {
        window.location.href="/list-product";
      }

    
    render() {
      const gocart = () => {
        if (window.confirm("장바구니에 담으시겠습니까?")){   
          if(window.confirm('장바구니를 확인하시겠습니까?'))
          window.location.href = "/cart";
          else{
             alert( "장바구니에 상품이 담겼습니다")
          }
  } else {
  }
};
    return (
        <div className={styles.container}>
        {/* ------제목------ */}
        
        <table className={styles.subject}>
        <thead>
                <tr>
                    <td readOnly={true} className= {styles.blink}>{this.hitcount> 50 ? 'Best' : 'New' } 
                    <span> {this.state.p_name}</span></td>
                    
                    <td>{this.state.p_cate1} ▷ {this.state.p_cate2}
                    </td>
                </tr>
        </thead>        
        </table>
        <table className={styles.hitcount}>
            <tr>
                <td>등록일 : {this.state.p_date} &nbsp;
                 조회수 : {Numeral(this.state.hitcount).format('0,0')}</td>
            </tr>
        </table>
        
        {/* ------이미지 칸------ */}
          <div className={styles.img}>
              <img src={`/images/product/${this.state.i_save}`} alt="설현"/>
          </div>
           
        {/* ------상품설명 칸------ */}
          <div className={styles.detail}>
          <tbody>
              <table>
                <p>Product Info <span>제품 정보</span></p>
                
                <tr>
                    <td>브랜드</td>
                    <td>{this.state.p_brand}</td>
                </tr>
                <tr>
                    <td>상품 이름</td>
                    <td>{this.state.p_name}</td>
                </tr>
                <tr>
                    <td>상품태그</td>
                    <td>{this.state.p_tag}</td>
                </tr>
                <tr>
                    <td>색상</td>
                    <td>{this.state.p_color}</td>
                </tr>

              <p>Price Info <span>가격정보</span></p>
              
              
                <tr>
                    <td>정상가</td>
                    <td><s>{this.state.p_price}원</s></td>
                </tr>
                <tr>
                    <td>할인율</td>
                    <td className={styles.color_rate}>{this.state.p_rate}%</td>
                </tr>
                <tr>
                    <td>판매가</td>
                    <td>{Numeral(this.state.p_Test2).format('0,0')}원</td>
                </tr>
                
                <tr>
                  <td>
                    사이즈 : 
                  </td>
                    <td colSpan={2}>
                        <select style={{width:200}}>
                        <option selected>사이즈를 선택하세요</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                    </select>
                    </td>
                </tr>

                <tr>
                  <td>
                    수량 : 
                  </td>
                    <td colSpan={2}>
                        <input style={{width:100}} type='number'/>
                    </td>
                </tr>
                
                <tr>
                      <td colSpan={2}>
                      <button onClick={gocart}><BsCart4/> 장바구니에 담기</button>
                      </td>
                </tr>

               
                
                  
              </table>
              </tbody>  
            
              
          </div>
        {/* ------상세페이지------ */} 
        {/* <div className={styles.desc}>
            <p></p>
        </div> */}
        <div>
            <button className={styles.list_button} onClick={this.productList}><BsList/> 상품목록</button>
        </div>

        <div className={styles.desc}>
          <img src={`/images/product/${this.state.i_save2}`} alt="상세이미지"/>
        </div>

        </div>

    );
    }
}

export default ProductDetail;

