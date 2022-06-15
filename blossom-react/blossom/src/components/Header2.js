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
            <img src='./images/Main.jpg' alt=''/>
        </div>
        <div className={header.navbar} style={{top:scrollPosition < 200 ? '' : 0, position:scrollPosition < 200 ? 'absolute' : 'fixed'}}>
            <a className={header.logo} href="/"><img src='./images/Logo.png' style={{height:45.3}} alt='로고'/></a>

            <a href="/news">신상품</a>
            <div className={header.category}>
                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/outer'}>아우터
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/padding'>패딩</a>
                        <a href='/coat'>코트</a>
                        <a href='/cardigan'>가디건</a>
                        <a href='/jacket'>자켓</a>
                    </div>
                </div>
                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/top'}>상의
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/long'>긴팔</a>
                        <a href='/short'>반팔</a>
                        <a href='/neat'>니트</a>
                        <a href='/shirt'>셔츠/블라우스</a>
                        <a href='/hood'>후드/맨투맨</a>
                        <a href='/sleeveless'>민소매</a>
                    </div>
                </div>

                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/bottom'}>하의
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/jean'>청바지</a>
                        <a href='/slacks'>슬렉스</a>
                        <a href='/cotton'>면바지</a>
                        <a href='/shortpants'>반바지</a>
                        <a href='/sports'>트레이닝</a>
                        <a href='/skirt'>스커트</a>
                    </div>
                </div>

                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/onepiece'}>원피스
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/mini'>미니</a>
                        <a href='/mid'>미디</a>
                        <a href='/long'>롱</a>
                    </div>
                </div>

                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/shoes'}>신발
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/sneakers'>운동화</a>
                        {/* 구두 억지로 만듬; */}
                        <a href='/classic'>구두</a> 
                        <a href='/slipper'>슬리퍼</a>
                        <a href='/sandal'>샌들</a>
                    </div>
                </div>

                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/acc'}>잡화
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/bag'>가방</a>
                        <a href='/accessory'>악세서리</a>
                        <a href='/cap'>모자</a>
                    </div>
                </div>

                <div className={header.dropdown}>
                    <button className={header.dropbtn} onClick={(e) => window.location.href='/under'}>언더웨어
                        <i className="fa fa-caret-down"></i>
                    </button>
                    <div className={header.dropdown_content}>
                        <a href='/pajamas'>잠옷</a>
                        <a href='/underwear'>속옷</a>
                        <a href='/socks'>양말</a>
                    </div>
                </div>
            </div>
            <a href="/cart" style={{float:'right'}}><i className="fas fa-shopping-cart"></i>CART</a>
            {
                isLog 
                && <a href="/main" style={{float:'right'}} onClick={logout}><i className="fa fa-fw fa-user"/>LOGOUT</a>
            }
            {
                !isLog && <a href="/login" style={{float:'right'}}><i className="fa fa-fw fa-user"/>LOGIN</a>
            }
            

        </div>
        </>
    );
};


export default Header;