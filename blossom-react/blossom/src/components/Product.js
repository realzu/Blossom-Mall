import React, { Component } from 'react';
import styles from '../assets/css/Product.module.css';
// import img from 'process.env.PUBLIC_URL/sample';
import axios from 'axios';


class product extends Component{

  constructor(props){
    super(props);
    this.state = {
      products: [],
      images:[],
      items: 8,
      preItems: 0,
      message: null,
      p_Test : 0,
    }

    console.log(this.setState.p_name);
  }

  componentDidMount() {
    this.getData();
    
    window.addEventListener("scroll", this.infiniteScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.infiniteScroll);
  }

  getData = () => {
    const { preItems, items, products , images} = this.state;
    axios.get("http://localhost:8080/product")
      .then((res) => {
        const result = res.data.slice(preItems, items);
        this.setState({
          products: [...products, ...result],
          images: [...images, ...result]
          
        });
        console.log(res.data);
      });
  }

  infiniteScroll = () => {
    const { documentElement, body } = document;
    const { items } = this.state;

    const scrollHeight = Math.max(documentElement.scrollHeight, body.scrollHeight);
    const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    const clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        preItems: items,
        items: items + 10,
      });
      this.getData();
    }
  };

      //상품 상세 페이지 들어가기
      ProductDetail = (products) => {
        window.location.href='/productDetail/' + products;
      }

render(){

return (
  <>
  
    <div className={styles.container}>
            {
                this.state.products.map( product  =>
            <div className={styles.product} key={product.p_num}>
            {/* 이미지 */}
            <ul className={styles.product_ul}>      
                <li>
                    <img src={`/images/product/${product.i_save}`} onClick={()=>this.ProductDetail(product.p_num)}alt="상품사진"></img>
                </li>
                <li className={styles.color_brand}>
                    {product.p_brand}
                    <span className= {styles.blink}> {product.hitcount> 50 ? 'Best' : 'New' } </span>
                </li> 
                    {/* 상품이름 */}
                    <li className={styles.pname}
                    onClick={()=>this.ProductDetail(product.p_num)}>{product.p_name} </li>
                    {/* 상품가격 */}
                    <li onClick={()=>this.ProductDetail(product.p_num)}>
                        {/* 할인가격 */}
                        <b>{[this.p_Test = (product.p_price)-(product.p_price * (product.p_rate * 0.01))].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</b>
                        {/* 정가 */}
                        <del className={styles.color_oriprice}>{product.p_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</del>
                        {/* 할인율 */}
                        <span className={styles.color_rate}><b>{product.p_rate}%</b></span>
                    </li>
            </ul>
            
        </div>
        )}
      </div>
      
  </>
        
    );
    }
};

export default product;