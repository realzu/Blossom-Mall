import React from 'react';
import '../assets/css/Order.module.css'

const Orders = () => {


    return (
        <div className='container'>
                <ul>
                    <li><b>장바구니({}1)</b></li>
                    <li><b>장바구니 &#62;</b> 주문결제 &#62; 주문완료</li>
                </ul>
                <thead>
                    <tr className='head_tr'>
                        <th colSpan='3'>상품명</th>
                        <th>정가</th>
                        <th>판매가</th>
                        <th>수량</th>
                        <th>합계</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='body_tr'>
                        <td><input type='checkbox' className='checkbox'/></td>
                        <td><img src='/images/sample.jpg' alt='의류 이미지 샘플'/></td>
                        <td className='pro_name'><b>[구찌{}]</b><br/> 실크 쉬폰 러플 셔츠{}<br/>Size:L{}</td>
                        <td className='pr'>2,250,000{}원</td>
                        <td className='pr'>2,250,000{}원</td>
                        <td className='pr'>
                            <a>▲ </a>1{}개<a> ▼</a><br/>
                            <button className='amount'>변경</button>
                        </td>
                        <td className='pr'>2,250,000{}원</td>
                    </tr>
                </tbody>
                <hr/>
                <p className='c_total'>총 수량 : {}개 / 총 금액 : {}원</p>
                <hr/>
                <button className='orderbutton'>결제하기</button>
            </div>
    );
};

export default Orders;