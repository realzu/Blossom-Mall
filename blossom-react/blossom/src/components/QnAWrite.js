import axios from 'axios';
import React, { Component } from 'react';
import CancelButton from './CancelButton';
import { css } from "@emotion/css";
import mypage from '../assets/css/Mypage.module.css'
import MypageTop from './MypageTop';
import MypageInfo from './MypageInfo';


class QnAWrite extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          type: '',
          num: '',
          id: '',
          title: '',
          contents: '',
           
        }
    
      }
    
      onChange = (e) => {
        this.setState({
          [e.target.name] : e.target.value //우린 const {value,name} = e.target 해서 한 단계 더있는느낌
        })
      }

    saveQnA= (e) => {
        e.preventDefault();
    
       
        let dto = {
          type: this.state.type,
          num: this.state.num,
          id: this.state.id,
          title: this.state.title,
          contents: this.state.contents,
          state: '답변 대기'
        }
    
        axios.post("http://localhost:8080/QnA/write",dto)
        .then( res => {
            console.log(res.data.id)
            window.location.replace('http://localhost:3000/mypage/qna');
        })
        .catch( err => {
          console.log(err)
        });
    }

    render(){
        return (
          <div className={mypage.container}>
          <div className={mypage.menu}>
              <MypageTop/>
          </div>
          <div className={mypage.my}> 
              <MypageInfo/>
          </div>
          <div className={mypage.orderlist}>
                <p className={mypage.tit}>1:1문의</p>
            <div className={mypage.box}>
                <form  action="/mypage/qna" method="post">
                
                <table className={mypage.test}>
                    <tr>
                        <td>문의유형</td>
                        <select onChange={this.onChange} name='type' value={this.state.type} className={mypage.title_input} placeholder='문의'>
                            <option>문의유형 선택</option>
                            <option>교환</option>
                            <option>환불</option>
                            <option>출하전 취소</option>
                            <option>배송</option>
                        </select>
                    </tr>
                    <br/>
                    <tr>
                        <td>주문번호</td>
                        <input type='text' onChange={this.onChange} name='num' value={this.state.num} className={mypage.title_input} placeholder='주문번호를 입력해주세요'></input> 
                    </tr>
                    <br/>
                    <tr>
                        <td>아이디</td>
                        <input type='text' onChange={this.onChange} name='id' value={this.state.id} className={mypage.title_input} placeholder='아이디를 입력해주세요'></input> 
                    </tr>
                    <br/>
                    <tr>
                        <td>제목</td>
                        <input type='text' onChange={this.onChange} name='title' value={this.state.title} className={mypage.title_input} placeholder='제목을 입력해주세요'></input> 
                    </tr>
                    <br/>
                    <tr>
                        <td>내용</td>
                        <textarea className={mypage.qna_textarea} onChange={this.onChange} name='contents' value={this.state.contents}  maxLength='2000' placeholder='내용을 입력해주세요'></textarea> 
                    </tr>
                
                </table>
                </form>
                <div style={{float:'right'}}>
                <td><CancelButton/></td>
                <td><button className={css`
                            
                              border: 1px solid #000000;
                              box-sizing: border-box;
                              border-radius: 12px;
                              font-style: normal;
                              font-weight: normal;
                              font-size: 12px;
                              line-height: 14px;
                              color: #000000;
                              padding: 6px 21px;
                              :hover{
                                background: #abcdef;
                                color: #ffffff;
                              }
                              `}
                              type='submit' onClick={this.saveQnA}>작성하기</button></td>
                </div>
                
                              
                
            </div>
            
            </div>
            </div>
    
          );
        }
    }
        
    

export default QnAWrite;        