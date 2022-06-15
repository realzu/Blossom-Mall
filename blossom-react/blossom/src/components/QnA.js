import React from 'react';
import QnAList from './QnAList';
import mypage from '../assets/css/Mypage.module.css'
import MypageInfo from './MypageInfo';
import MypageTop from './MypageTop';

const QnA = () => {

    function buttonClick(e) {
        window.location.href = '/mypage/qnawrite'
    }

    return (
        <div className={mypage.container}>
            <div className={mypage.menu}>
                <MypageTop/>
            </div>
            <div className={mypage.my}> 
                <MypageInfo/>
            </div>
            <div className={mypage.orderlist}>
                <p className={mypage.tit}>1:1문의
                <button onClick={buttonClick} className={mypage.qnabutton}>문의 작성</button></p>
                <QnAList/>
            </div>
        </div>

    );
};

export default QnA;