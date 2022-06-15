import React from "react"
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Cart from "./Cart";
import FAQ from "./FAQ";
import MemberUpdate from "./MemberUpdate";
import MypageInfo from './MypageInfo';
import MypageList from './MypageList';
import MypageTop from './MypageTop';
import QnA from "./QnA";
import QnAWrite from "./QnAWrite";
import mypage from '../assets/css/Mypage.module.css'

const Mypage = () => {

    return (
        <div className={mypage.container}>
        <div className={mypage.menu}>
            <MypageTop/>
        </div>
        <div className={mypage.my}> 
            <MypageInfo/>
        </div>
        <div className={mypage.orderlist}>
            {/* <Switch>
                <Route path="/mypage/orderlist">
                    <MypageList />
                </Route>
                <Route path="/mypage/memberupdate">
                    <MemberUpdate />
                </Route>
                <Route path="/mypage/cart">
                    <Cart />
                </Route>
                <Route path="/mypage/qna">
                    <QnA />
                </Route>
                <Route path="/mypage/faq">
                    <FAQ />
                </Route>
                <Route path="/mypage/qnawrite">
                    <QnAWrite />
                </Route>
            </Switch> */}
        </div>
        </div>
            
        
    );
};

export default Mypage;