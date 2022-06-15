import React, {useState, useEffect} from 'react';
import axios from 'axios';
import mypage from '../assets/css/Mypage.module.css'
import Numeral from 'numeral';
import MypageTop from './MypageTop';
import MypageInfo from './MypageInfo';

const MypageList = (props) => {

    const [list, setList] = useState([{}])

    let num = 1

    useEffect(() =>
    {
        axios.get("http://localhost:8080/mypage/list/" + window.localStorage.getItem('id'))
        .then(res => {
            setList(res.data)
        })
    }, [])

    return (
        <div className={mypage.container}>
        <div className={mypage.menu}>
            <MypageTop/>
        </div>
        <div className={mypage.my}> 
            <MypageInfo/>
        </div>
        <div className={mypage.orderlist}>
            <h2 className={mypage.tit}>나의 주문 내역</h2>
            <span className={mypage.tit_sub}></span>
            <table className={mypage.mytable}>
                {/* <colgroup>
                    <col style="width:*" />
                    <col style="width:14.2%" />
                    <col style="width:14.2%" />
                    <col style="width:14.2%" />
                    <col style="width:10.2%" />
                    <col style="width:11%" />
                </colgroup> */}
                <thead >
                    <tr className={mypage.trborder}>
                        <th scope='col'>상품정보</th>
                        <th scope='col'>주문일자</th>
                        <th scope='col'>주문번호</th>
                        <th scope='col'>주문금액</th>
                        <th scope='col'>구매수량</th>
                        <th scope='col'>배송상태</th>
                    </tr>
                </thead>
                <tbody >
                {
                list.map(item =>
                    (
                        <div className={mypage.row}>
                        
                        <tr key={`LKEY${num++}`}>
                        <ul className={mypage.info}>
                            <td><img src= {`/images/${item.i_SAVE}`} alt='' className={mypage.img_block}/></td>
                            <td className={mypage.name}>{item.p_NAME}</td>
                            <td>{item.p_DATE}</td>
                            <td>{item.p_NUM}</td>
                            <td>{Numeral(item.od_TOTAL).format('0,0')}</td>
                            <td>{item.c_QUANTITY}</td>
                            <td>{item.od_STATUS }</td>
                            </ul>
                        </tr>
                        </div>
                        
                    ))
                    
                }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default MypageList;