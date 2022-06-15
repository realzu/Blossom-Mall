import axios from 'axios';
import React, { useEffect, useState } from 'react';
import mypage from '../assets/css/Mypage.module.css'

const QnAList = () => {

    const [data, setData] = useState([{}])

    let num = 1
    useEffect(() =>
    {
        axios.get("http://localhost:8080/QnA/read")
        .then(res => {
            setData(res.data)
            
        })
    }, [])
    return (
            <table className={mypage.qnatable}>
                <thead>
                    <tr>
                        <td>문의유형</td>
                        <td>제목</td>
                        <td>주문번호</td>
                        <td>작성일</td>
                        <td>처리상태</td>
                    </tr>
                </thead>
                <tbody>
                {
                data.map(item =>
                    (
                        <tr key={`LKEY${num++}`}>
                            <td>{item.type}</td>
                            <td>{item.title}</td>
                            <td>{item.num}</td>
                            <td>{item.nal}</td>
                            <td>{item.state}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
    );
};

export default QnAList;