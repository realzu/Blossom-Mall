import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  BrowserRouter as Switch,  Route,  Link } from 'react-router-dom';
import './App.css'
import UserListComponent from './components/UserListComponent';
import AddUserComponent from './components/AddUserComponent';
import EditUserComponent from './components/EditUserComponent';
import FAQUP from './components/FAQUP';
import NoticeUp from './components/NoticeUp';
import AddProduct from './components/AddProduct';
import Header from './components/Header';
import Footer from './components/Footer';
import Test from './components/Test';
import {withRouter} from 'react-router-dom';
import Mypage from './components/Mypage';
import MypageList from './components/MypageList';
import MemberUpdate from './components/MemberUpdate';
import Cart from './components/Cart';
import QnA from './components/QnA';
import FAQ from './components/FAQ';
import QnAWrite from './components/QnAWrite';
import product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Cate1List from './components/Cate1List';
import Cate2List from './components/Cate2List';
import MainBanner from './components/MainBanner';
import MainPg from './components/MainPg';
import Login from './components/Login';
import Join from './components/Join';
import UserInfo from './components/UserInfo';
import FindPwd from './components/FindPwd';
import FindPwdd from './components/FindPwdd';
import Orders from './components/Orders';
import sucessPay from './components/sucessPay';
import Order from './components/Order';


function App() {

  const [isLog,setIsLog] = useState(false);

  useEffect(()=>{
      if(localStorage.getItem('id')==='admin'){
          setIsLog(true)
      }        
  },[localStorage.getItem('id')])

  return (
    <div className="App">
        <Header/>
        {/* <MainBanner/> */}
        {
                isLog  &&
        <nav style={{paddingTop:50}}>
          <ul >
            <li style={{display:'inline',margin:20,}}>
              <a style={{color:'black',textDecoration:'none'}} href='/'>홈</a>
            </li>
            <li style={{display:'inline',margin:20}}>
              <a style={{color:'black',textDecoration:'none'}} href='/faqup'>FAQ등록</a>
            </li>
            <li style={{display:'inline',margin:20}}>
              <a style={{color:'black',textDecoration:'none'}} href='/noticeup'>공지등록</a>
            </li>
            <li style={{display:'inline',margin:20}}>
              <a style={{color:'black',textDecoration:'none'}} href='/products'>상품등록</a>
            </li>
            <li style={{display:'inline',margin:20}}>
              <a style={{color:'black',textDecoration:'none'}} href='/mypage'>마이페이지</a>
            </li>
            <li style={{display:'inline',margin:20}}>
              <a style={{color:'black',textDecoration:'none'}} href='/list-product'>상품리스트</a>
            </li>
          </ul>
        </nav>
        }
        
        {/* <Switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
        <Switch>
          <Route exact path={['/main','/']} component={MainPg}/>
          <Route exact path="/users" component={UserListComponent} />
          <Route path="/add-user" component={AddUserComponent} />
          <Route path="/edit-user" component={EditUserComponent} />
          <Route path="/faqup" component={FAQUP} />
          <Route path="/noticeup" component={NoticeUp} />
          <Route path="/products" component={AddProduct} />
          <Route path="/test" component={Test} />
          <Route path="/login" component={Login}/>
          <Route path="/join" component={Join}/>
          <Route path="/user-info" component={UserInfo}/>
          <Route path="/find-pwd" component={FindPwd}/>
          <Route path="/find-pwdd" component={FindPwdd}/>

          <Route exact path="/mypage" component={Mypage} />
          <Route path="/mypage/orderlist" component={MypageList}/>
          <Route path="/mypage/memberupdate" component={UserInfo}/>
          <Route path="/mypage/cart" component={Cart}/>
          <Route path="/mypage/qna" component={QnA}/>
          <Route path="/mypage/faq" component={FAQ}/>
          <Route path="/mypage/qnawrite" component={QnAWrite}/>
          <Route path="/list-product" component={product} />
          <Route path="/productDetail/:p_num" component={ProductDetail}/>
          <Route path="/cate1/:cate1" component={Cate1List}/>
          <Route path="/cate2/:cate2" component={Cate2List}/>

          <Route path="/cart" component={Cart} />
          <Route path="/order" component={Order} />
          <Route path="/sucessPay" component={sucessPay} />
        </Switch>
        
        <Footer/>
      </div>
    
  );
}

export default withRouter(App);