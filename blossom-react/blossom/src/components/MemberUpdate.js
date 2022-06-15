import React from 'react';
import mypage from '../assets/css/Mypage.module.css'
import MypageInfo from './MypageInfo';
import MypageTop from './MypageTop';
const MemberUpdate = () => {
    return (
        <div className={mypage.container}>
            <div className={mypage.menu}>
                <MypageTop/>
            </div>
            <div className={mypage.my}> 
                <MypageInfo/>
            </div>
            <div className={mypage.orderlist}>
                <p className={mypage.tit}>개인정보수정</p>
            </div>
        </div>
    );
};

export default MemberUpdate;