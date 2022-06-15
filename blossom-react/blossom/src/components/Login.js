import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../service/ApiService';
import login from '../assets/css/Login.module.css';
import CryptoJS from 'crypto-js';

class Login extends Component {

    constructor(props){
        super(props)

        this.state = {
            m_id : '',
            m_pwd : '',
            m_salt : '',
            m_enPwd : '',
            isLog : false
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    loginUser = (e) => {
        ApiService.userById(this.state.m_id)
            .then(res=> {
                if(this.state.m_id === res.data.m_id){

                    const key128Bits = CryptoJS.PBKDF2(this.state.m_pwd,CryptoJS.enc.Hex.parse(res.data.m_salt),{
                        keySize: 128 / 32,
                        iterations: 1000
                    })

                    const bytes = CryptoJS.AES.decrypt(res.data.m_enPwd,key128Bits.toString())   
                    const decrypted = bytes.toString(CryptoJS.enc.Utf8)

                    if(this.state.m_pwd === decrypted.toString()){
                        window.localStorage.setItem('id',this.state.m_id)
                        window.location.replace('/main')
                        alert('로그인 성공!')           
                    }else{
                        alert('아이디 혹은 비밀번호가 일치하지 않습니다')
                        return;
                    }
                }else{
                    alert('아이디 혹은 비밀번호가 일치하지 않습니다')
                }
            })
            .catch(err => {
                console.log('암호화 에러',err)
            })
    }

    render() {
        return (
            <div className={login.container}>
                <div>
                    <p className={login.title}>로그인</p>
                </div>
                <div className={login.content}>
                    <input type='text' name='m_id' placeholder='아이디를 입력해주세요' value={this.state.m_id} onChange={this.onChange}/>
                    <input type='password' name='m_pwd' placeholder='비밀번호를 입력해주세요' value={this.state.m_pwd} onChange={this.onChange}/>
                    <button onClick={this.loginUser}>로그인</button>
                    <p>
                        <a href='' id={login.href}>아이디 찾기</a> ｜ 
                        <a href='/find-pwd' id={login.href}>비밀번호 찾기</a> ｜ 
                        <a href='/join' id={login.href}>회원가입</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default Login;