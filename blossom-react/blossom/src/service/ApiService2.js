import axios from 'axios';

const PRODUCT_API_BASE_URL = "http://localhost:8080/product";
const Oder_API_BASE_URL = "http://localhost:8080/orders";
class ApiService {

  // 상품 목록
  //리스트에 들어가기
  fetchProduct(){
    return axios.get(PRODUCT_API_BASE_URL);
  }

  fetchProductDetail(product){
    return axios.get(PRODUCT_API_BASE_URL + '/' + product);
  }

  //상세페이지에 들어가기
  addProduct(product){
    return axios.post(PRODUCT_API_BASE_URL, product)
  }
  //end 상품 목록

  //장바구니
  fetchOder(){
    return axios.get(Oder_API_BASE_URL);
  }


}

export default new ApiService();