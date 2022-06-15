import React, { useEffect, useState } from 'react';
import styles from'../assets/css/Order.module.css';
import axios from 'axios';
import DaumPostcode from 'react-daum-postcode';

const Order = () => {

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


    /*-------주소검색-------*/
    const [writeInfo, setWriteInfo] = useState();
    const [visible, setVisible] = useState(false); // 우편번호 컴포넌트의 노출여부 상태

    const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = ''; 

    if (data.addressType === 'R') {
        if (data.bname !== '') {
        extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
        extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
        }
        fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
    }
    setWriteInfo({ ...writeInfo, address : fullAddress})
    setVisible(false)

    document.getElementById('postcode').value = data.zonecode;
    document.getElementById('roadAddress').value = data.address;
    }

    const postCodeStyle = {
        position: "absolute",
        top: "105%",
        left : "41%",
        width: "600px",
        height: "700px",
        border: "3px solid #E0E0E0",
    };

    const paypay = () => {
        if (window.confirm("결제하시겠습니까?")) {
                window.location.href = "/sucessPay";

        } else {
        }
      };


    // /*------주문 시 장바구니 내역 삭제-------*/
    // const deleteAllcart = useCallback((p_num) => {
    //     axios.delete("http://localhost:8080/cart/list/")
    //     .then(res=>{
    //         setList(list => {return list.filter(cart => cart.p_num !== p_num);
    //     })
    //     }, []);
    // });

    // const [point, setPoint] = useState();

    // const clickpoint = () =>{
    //     const popo = 5000;
    //     popo = point;
    //     clickpoint = setPoint; 

    //     document.getElementById('clickpoint').value = popo;
    // }

    return (
        <div className={styles.container1}>
        {/*------------주문내역------------*/}
        <div className={styles.ordercheck}>
            <ul>
                <li><b>주문내역</b></li>
                <li>장바구니 &#62; <b>주문결제 &#62; </b>주문완료</li>
            </ul>
            <table>
            <thead>
                <tr>
                    <th colSpan='3'>상품명</th>
                    <th>정가</th>
                    <th>판매가</th>
                    <th>수량</th>
                    <th>합계</th>
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
                        <td></td>
                    </tr>
                  
            </tbody>
            </table>
            <hr/>
            <p className={styles.c_total}>총 수량 : 2개 / 총 금액 : 총 금액 : 4,000,000원</p>
            <hr/>
            </div>

        {/*------------배송정보------------*/}
            <div className={styles.deliverinfo}>
                <table className={styles.deliver}>
                    <tr>
                        <td>배송정보</td>
                        <td></td>
                    </tr>
                </table>
                <table className={styles.info}>
                    <tr>
                        <td><span>♥</span> 수취인 이름</td>
                        <td><input type='text'/></td>
                    </tr>
                    <tr>
                        <td><span>♥</span> 수취인 연락처</td>
                        <td><input type='text' placeholder=' - 를 제외하고 써주세요'/>{}</td>
                    </tr>
                    <tr>
                        <td><span>♥</span> 배송지 주소</td>
                        <td>
                    
                            <input type='text'  readonly="readonly"  placeholder=' 우편번호' id='postcode'  /><button onClick={() => setVisible(true)}>주소 검색</button><br/>
                            {
                            visible? 
                            <div>
                                <DaumPostcode style={postCodeStyle}
                                onComplete={handleComplete}
                                height={700}
                                />
                            </div>
                            : null
                            }
                            <input type='text' readonly="readonly" id='roadAddress'/><br/>
                            <input type='text' placeholder=' 상세주소를 입력하세요'/><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>배송시 요청사항</td>
                        <td><input type='text'placeholder=' ex) 문앞에 놔주세요'/></td>
                    </tr>
                </table>
            </div>
        {/*------------쿠폰 / 포인트------------*/}  
           <div className={styles.coupoint}>
                <table className={styles.coup}>
                    <tr>
                        <td>쿠폰 / 포인트</td>
                    </tr>
                </table>
                <table className={styles.point}>
                    <tr>
                        <td>쿠폰적용</td>
                        <td>
                            <select>
                                <option selected>사용가능한 쿠폰 {0}개 / 전체 {0}개 </option>
                                {/* <option>{orders.C_NAME}</option> */}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><span>포인트 적용</span></td>
                        <td>
                            <input type='text' id='clickPoint'/><button>모두사용</button>
                            <p>보유 포인트 : {0}점</p>
                            <p>포인트는 1점부터 사용가능합니다. (1점=1원)</p>
                        </td>
                    </tr>
                </table>
           </div>
        {/*------------결제 금액------------*/}
            <div className={styles.payment}>
               <p>결제 금액</p>
               <table>
               <thead>
                    <tr>
                        <th>총 상품 금액</th>
                        <th>쿠폰 적용</th>
                        <th>포인트 적용</th>
                        <th>총 결제 금액</th>
                    </tr>
               </thead>
                <tbody>
                    <tr>
                        <td>4,000,000원</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>4,000,000원</td>
                    </tr>
                </tbody>
                </table>
           </div>
        {/*------------결제수단------------*/}
            <div className={styles.kakao}>
                <table className={styles.kakaoo}>
                    <tr>
                        <td>결제 금액</td>
                    </tr>
                </table>
                <table className={styles.pay}>
                    <tr>
                        <td>결제 수단</td>
                        <td>
                            <button>카카오페이</button>    
                            <button>신용카드</button>    
                            <button>무통장 입금</button>    
                        </td>
                    </tr>
                </table>
                <button className={styles.lastpay} onClick={paypay}>결제하기</button>
            </div>
       </div>
    );
};

export default Order;