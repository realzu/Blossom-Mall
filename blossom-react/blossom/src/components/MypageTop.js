import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import mypage from '../assets/css/Mypage.module.css'

const MypageTop = () => {

    const [list, setList] = useState([{}])

    useEffect(() =>
    {
        axios.get("http://localhost:8080/coupon/list")
        .then(res => {
            setList(res.data)
        })
    }, [])
    return (
    
        (
            <div>
                <a href="/mypage/orderlist" style={{textDecoration:'none',color:'black'}}><h1 className={mypage.menu1}>My page</h1></a>
                <div className={mypage.menutop}>
            </div>
            </div>
        )
    
        
        
    );
};

export default MypageTop;