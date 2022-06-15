import React from 'react';
import { Link } from 'react-router-dom';
import mypage from '../assets/css/Mypage.module.css'
const MypageInfo = () => {
    return (
        
        <nav className={mypage.nav}>
        <ul className={mypage.myul}> 
                <a href="/mypage/orderlist"><li className={mypage.myli}>나의 주문 내역</li></a>
                <a href="/mypage/memberupdate"><li className={mypage.myli}>개인정보수정</li></a>
                <a href="/mypage/faq"><li className={mypage.myli}>자주 묻는 질문</li></a>
                <a href="/mypage/cart"> <li className={mypage.myli}>장바구니</li></a>
                <a href="/mypage/qna"><li className={mypage.myli}>1:1문의</li></a>
        </ul>
        </nav>
    );
};

export default MypageInfo;