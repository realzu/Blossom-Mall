import React, { useCallback, useEffect, useState } from 'react';
import styles from '../assets/css/Cart.module.css';
import axios from 'axios';

const Cart = (cart) =>{

    const [list, setList] = useState([{}])
    const [count,setCount] = useState()
    const [total,setTotal] = useState()
    let num = 1

    useEffect(() =>
    {
        axios.get("http://localhost:8080/cart/list")
        .then(res => {
            setList(res.data)
        })
        axios.get("http://localhost:8080/cart/sumCount")
        .then(res => {
            console.log(res.data)
            setCount(res.data)
        })
        axios.get("http://localhost:8080/cart/sumTotal")
        .then(res => {
            console.log(res.data)
            setTotal(res.data)
        })

    }, [])

    function goOrder() {
        window.location.href = "/order";
    }


    /*---------수량 변경---------*/

    const [input, SetInput] = useState('');

    const updatecart = p_num => {
        SetInput(input)
        list.map(cart => {
        axios.put("http://localhost:8080/cart/list/"+ cart.p_num, cart)
        .then( res => {
            setList(list.map(cart => cart.p_num === p_num ? { ...cart, input : !cart.c_quantity } : cart)
            );

            console.log('된다!');
    })
    .catch((error) => {
        console.error('안된다 시붱');
    })
    
    })}

    /*---------총 합계-------------*/
    // const ContentPrice = props =>{
    //     const {list} = props;
    
    //     const PriceForPills = list.map(cart=> {
    //     return Object.values(cart)[3]*cart.quantity;
    //     });
        
    //     const TotalForPills = PriceForPills.reduce((a,b)=> a+b,0);
        
    //     const TotalPriceTag = TotalForPills;

    // }

    /*---------목록에서 삭제---------*/
    const deletecart = useCallback((p_num) => {
        axios.delete("http://localhost:8080/cart/list/"+p_num)
        .then(res=>{
            setList(list => {return list.filter(cart => cart.p_num !== p_num);
        })
        }, []);
    });


    return (

        <div className={styles.container1}>
            <div className={styles.cartcart}>
                <ul>
                    <li><b>장바구니({count})</b></li>
                    <li><b>장바구니 &#62;</b> 주문결제 &#62; 주문완료</li>
                </ul>
            </div>
            <table className={styles.tr1}>
                <thead >
                    <tr >
                        <th colSpan='3'>상품명</th>
                        <th>정가</th>
                        <th>판매가</th>
                        <th>수량</th>
                        <th>합계</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

              
                    <tr key={`LKEY${num++}`}>
                       <td>
                       {/* <input type='checkbox' id='checkbox1'/> */}
                           {/* <label for='checkbox1'/> */}
                        </td>
                        <td><img src='/images/sample.jpg'/></td> 
                        <td>
                            <b>[구찌]</b><br/>구찌 블라우스<br/>L
                        </td>
                        <td>2,500,000원</td>
                        <td>2,000,000원</td>
                        <td>2개</td>
                        <td>4,000,000원</td>
                        <td><button onClick={() => deletecart(cart.p_num)}>Χ</button></td>
                       
                    </tr>
             
                </tbody>
                </table>
                <hr/>

                <p className={styles.c_total}><span>총 수량 : 2개 </span> / <span>총 금액 : 4,000,000원</span></p>

                <hr/>
                <button className={styles.orderbutton} onClick={goOrder}>결제하기</button> 
            </div>
    );
    }
export default Cart;