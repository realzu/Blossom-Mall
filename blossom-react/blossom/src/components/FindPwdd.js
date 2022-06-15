import React, { Component } from 'react';
import CryptoJS from 'crypto-js';
import ApiService from '../service/ApiService';
import join from '../assets/css/Join.module.css';


class FindPwdd extends Component {

    constructor(props){
        super(props);

        this.state = {
            m_id : window.localStorage.getItem('id'),
            m_pwd : '',
            m_pwdck: '',
            m_salt: CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex),
            m_enPwd: '',
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    pwdEncrypt = (e) => { //암호화를 위한 랜덤 키값 생성
        e.preventDefault()

        var pwdExt = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^]).{8,20}$/

        if(this.state.m_pwd !== this.state.m_pwdck){
            this.setState({pwdMsg : '비밀번호가 일치하지 않습니다'})
            return;
        }else if(!pwdExt.test(this.state.m_pwd)){
            this.setState({pwdMsg : '비밀번호가 올바르지 않습니다'})
            return;    
        }else {
            this.setState({pwdMsg : '비밀번호가 일치합니다'})
        }

        const key128Bits = CryptoJS.PBKDF2(this.state.m_pwd,CryptoJS.enc.Hex.parse(this.state.m_salt),{
            keySize: 128 / 32,
            iterations: 1000
        })

        const encrypted = CryptoJS.AES.encrypt(
            this.state.m_pwd,
            key128Bits.toString()
        )

        this.setState({ //암호화된 비밀번호
            m_enPwd : encrypted.toString()
            })
    }

    alter = (e) => {
        e.preventDefault()

        let user = {
            m_id : this.state.m_id,
            m_pwd: this.state.m_pwd,
            m_salt: this.state.m_salt,
            m_enPwd: this.state.m_enPwd
        }

        ApiService.updatePwd(user)
        .then(res => {
            window.localStorage.removeItem('id')
            window.location.replace('/login')
        })
        .catch(err => {
            console.log('updatePwd 에러',err)
        })

    }

    render() {
        return (
            <div className={join.container} id={join.alter}>
                <div>
                    <p className={join.title}>새 비밀번호 변경</p>
                </div>                
                
                <form>
                    <div className={join.content}>
                        <hr/>
                        <p>
                            <label>비밀번호</label><br/>
                            <input type='password' placeholder='* 영문자,숫자,특수문자(!@#$%^)가 포함된 8~20자' name='m_pwd' value={this.state.m_pwd} onChange={this.onChange}/>
                        </p>
                        <p>
                            <label>비밀번호 확인</label><br/>
                            <input type='password' placeholder='* 비밀번호를 한번 더 입력해주세요' name='m_pwdck' value={this.state.m_pwdck} onChange={this.onChange}/>
                            <button onClick={this.pwdEncrypt}>확인</button>
                            <span>{this.state.pwdMsg}</span>
                        </p> 
                    </div>

                    <div className={join.final}>
                        <hr/>
                        <button onClick={this.alter}>비밀번호 변경</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default FindPwdd;