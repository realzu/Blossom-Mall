import React, { useEffect, useState } from 'react';
import header from '../assets/css/header.module.css'

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    const [isLog,setIsLog] = useState(false);

    useEffect(()=>{
        if(localStorage.getItem('id')){
            setIsLog(true)
        }        
    },[localStorage.getItem('id')])

    const logout = () => {
        window.localStorage.removeItem('id')
        setIsLog(false)
    }

    return (
        <>
        <div className={header.main}>
            <a href='/'><img src='/images/Logo1234.png' alt=''/></a>
        </div>
        <div className={header.navbar} style={{top:scrollPosition < 200 ? '' : 0, position:scrollPosition < 200 ? 'absolute' : 'fixed'}}>
            <a className={header.logo} href="/"><img src='/images/Logo.png' style={{height:45.3}} alt='로고'/></a>

            <a href="/news">신상품</a>
            <div className={header.category}>
                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/cate1/아우터'}>아우터
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/cate2/패딩'>패딩</a>
                        <a href='/cate2/코트'>코트</a>
                        <a href='/cate2/가디건'>가디건</a>
                        <a href='/cate2/자켓'>자켓</a>
                    </div>
                </div>
                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/cate1/상의'}>상의
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/cate2/긴팔'>긴팔</a>
                        <a href='/cate2/반팔'>반팔</a>
                        <a href='/cate2/니트'>니트</a>
                        <a href='/cate2/블라우스'>블라우스</a>
                        <a href='/cate2/맨투맨'>맨투맨</a>
                        <a href='/cate2/민소매'>민소매</a>
                    </div>
                </div>

                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/cate1/하의'}>하의
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/cate2/청바지'>청바지</a>
                        <a href='/cate2/슬렉스'>슬렉스</a>
                        <a href='/cate2/면바지'>면바지</a>
                        <a href='/cate2/반바지'>반바지</a>
                        <a href='/cate2/트레이닝'>트레이닝</a>
                        <a href='/cate2/스커트'>스커트</a>
                    </div>
                </div>

                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/cate1/원피스'}>원피스
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/cate2/미니'>미니</a>
                        <a href='/cate2/미디'>미디</a>
                        <a href='/cate2/롱'>롱</a>
                    </div>
                </div>

                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/cate1/신발'}>신발
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/cate2/운동화'>운동화</a>
                        {/* 구두 억지로 만듬; */}
                        <a href='/cate2/구두'>구두</a> 
                        <a href='/cate2/슬리퍼'>슬리퍼</a>
                        <a href='/cate2/샌들'>샌들</a>
                    </div>
                </div>

                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/cate1/잡화'}>잡화
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/cate2/가방'>가방</a>
                        <a href='/cate2/악세서리'>악세서리</a>
                        <a href='/cate2/모자'>모자</a>
                    </div>
                </div>

                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/cate1/이너웨어'}>이너웨어
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/cate2/잠옷'>잠옷</a>
                        <a href='/cate2/속옷'>속옷</a>
                        <a href='/cate2/양말'>양말</a>
                    </div>
                </div>
            </div>
            <a href="/cart" style={{float:'right'}}><i className="fas fa-shopping-cart"></i>CART</a>
            {
                isLog 
                && <a href="/main" style={{float:'right'}} onClick={logout}><i className="fa fa-fw fa-user"/>LOGOUT</a>
            }
            {
                isLog 
                && <a href="/mypage" style={{float:'right'}}>마이페이지</a>
            }
            {
                !isLog && <a href="/login" style={{float:'right'}}><i className="fa fa-fw fa-user"/>LOGIN</a>
            }

        </div>
        </>
    );
};


export default Header;