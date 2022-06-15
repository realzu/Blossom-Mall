import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/users"; //Spring Boot Controller 주소 

const USER_URL = "http://localhost:8080/user"
const PRODUCT_URL = "http://localhost:8080/main"

class ApiService {

  fetchUsers(){
    return axios.get(USER_API_BASE_URL);
  }

  fetchUserByID(userID){
    return axios.get(USER_API_BASE_URL + '/' + userID); //axios 정보 읽어오기 json 정보 읽는거임
  }

  deleteUser(userID){
    return axios.delete('/users/' + userID);
  }
  
  addUser(user){
    return axios.post(USER_API_BASE_URL, user);
  }

  editUser(user){
    return axios.put(USER_API_BASE_URL + '/' + user.id, user)
  }

  addFAQ(faq){
    return axios.post("/faq", faq);
  }

  addNotice(notice){
    return axios.post("http://localhost:8080/notice", notice);
  }

  addProduct(products){
    return axios.post("http://localhost:8080/products", products);
  }

  joinUser(user){
    return axios.post(USER_URL,user);
  }

  userById(m_id){ //아이디 기준 고객정보
    return axios.get(USER_URL + '/' + m_id);
  }

  userByEm(m_email){ //아이디 기준 고객정보
    return axios.get(USER_URL + '/' + m_email);
  }

  updateUser(user){
    return axios.put(USER_URL, user);
  }

  updatePwd(user){ //비밀번호 변경
    return axios.put(USER_URL + '/pwd', user);
  }

//---------------------
  getProBest(){
    return axios.get(PRODUCT_URL + '/best');
  }

  getProNew(){
    return axios.get(PRODUCT_URL + '/new');
  }

  getProTag(){
    return axios.get(PRODUCT_URL + '/tag');
  }
}

export default new ApiService();