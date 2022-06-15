import React from 'react';
import { Link } from 'react-router-dom';
import header from '../assets/css/header.module.css'

const Header = () => {
    return (
        <div className={header.navbar}>
            <a href="/">홈 or 로고</a>

            <a href="/news">신상품</a>

            <div className={header.dropdown}>
                <button className={header.dropbtn} onClick={(e) => window.location.href='/outer'}>아우터
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className={header.dropdown_content}>
                    <a href='/padding'>패딩</a>
                    <Link to="#">코트</Link>
                    <Link to="#">가디건</Link>
                    <Link to="#">자켓</Link>
                    <a href='/noticeup'>공지등록</a>
                </div>
            </div>
            <div className={header.dropdown}>
                <button className={header.dropbtn} onClick={(e) => window.location.href='/top'}>상의
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className={header.dropdown_content}>
                    <Link to="#">긴팔</Link>
                    <Link to="#">반팔</Link>
                    <Link to="#">니트</Link>
                    <Link to="#">셔츠/블라우스</Link>
                    <Link to="#">후드/맨투맨</Link>
                    <Link to="#">민소매</Link>
                </div>
            </div>

            <div className={header.dropdown}>
                <button className={header.dropbtn} onClick={(e) => window.location.href='/bottom'}>하의
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className={header.dropdown_content}>
                    <Link to="#">청바지</Link>
                    <Link to="#">슬렉스</Link>
                    <Link to="#">면바지</Link>
                    <Link to="#">반바지</Link>
                    <Link to="#">트레이닝</Link>
                    <Link to="#">스커트</Link>
                </div>
            </div>

            <div className={header.dropdown}>
                <button className={header.dropbtn} onClick={(e) => window.location.href='/onepiece'}>원피스
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className={header.dropdown_content}>
                    <Link to="#">미니</Link>
                    <Link to="#">미디</Link>
                    <Link to="#">롱</Link>
                </div>
            </div>

            <div className={header.dropdown}>
                <button className={header.dropbtn} onClick={(e) => window.location.href='/shoes'}>신발
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className={header.dropdown_content}>
                    <Link to="#">운동화</Link>
                    <Link to="#">구두</Link>
                    <Link to="#">슬리퍼</Link>
                    <Link to="#">샌들</Link>
                </div>
            </div>

            <div className={header.dropdown}>
                <button className={header.dropbtn} onClick={(e) => window.location.href='/acc'}>잡화
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className={header.dropdown_content}>
                    <Link to="#">가방</Link>
                    <Link to="#">악세서리</Link>
                    <Link to="#">모자</Link>
                </div>
            </div>

            <div className={header.dropdown}>
                <button className={header.dropbtn} onClick={(e) => window.location.href='/under'}>언더웨어
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className={header.dropdown_content}>
                    <Link to="#">잠옷</Link>
                    <Link to="#">속옷</Link>
                    <Link to="#">양말</Link>
                </div>
            </div>

            <a href="/cart" style={{float:'right'}}><i className="fas fa-shopping-cart"></i>CART</a>
            <a href="/login" style={{float:'right'}}><i className="fa fa-fw fa-user"/>LOGIN</a>

        </div>
    );
};


export default Header;