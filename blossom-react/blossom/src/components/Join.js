import React, { Component } from 'react';
import ApiService from '../service/ApiService';
import join from '../assets/css/Join.module.css';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import CryptoJS from 'crypto-js';

//npm install --save react-daum-postcode
//npm install react-modal
//npm i crypto-js

Modal.setAppElement('#root')

const ModalSt = {
    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    content: {
        left: "0",
        margin: "auto",
        width: "500px",
        height: "500px",
        padding: "0",
        overflow: "hidden"
    }    
}

const img1 = {
    width: "20px",
    height: "20px",
}

const but1 = {
    float: "right",
    margin: "10px",
    border: "1px solid white"
}

const post = {
    left: "0",
    margin: "auto",
    width: "100%",
    height: "100%",
    padding: "0"
}

class Join extends Component {

    constructor(props){
        super(props);

        this.state = {
            m_id: '',
            m_pwd: '',
            m_pwdck: '',
            m_salt: CryptoJS.lib.WordArray.random(128/8).toString(CryptoJS.enc.Hex),
            m_enPwd: '',
            m_pwdMsg: '',
            m_name: '',
            m_email: '',
            m_tel: '',
            m_addr1: '',
            m_addr2: '',
            m_addr3: '',
            m_year: '',
            m_month: '',
            m_day: '',
            idMsg: null,
            idConfirm: false,
            emMsg: null,
            emConfirm: null,
            isDaum: false,
            allCk: false,
            useCk: false,
            infoCk: false,
        }
    }    

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value // const{value,name} = e.target 을 생략
        })
    }

    // -------------------------------------------------- 각각의 가입조건확인
    idCk = (e) => { //아이디 중복확인
        e.preventDefault()

        ApiService.userById(this.state.m_id)
            .then(res => {
                if(this.state.m_id === res.data.m_id){
                    this.setState({
                        idMsg : '기존에 존재하는 아이디입니다.',
                        idConfirm : false
                    })
                }else{
                    this.setState({
                        idMsg : '사용 가능한 아이디입니다.',
                        idConfirm : true
                    })}
            })
            .catch(err => {
                console.log('idCk 에러', err);
            })
    }

    emailCk = (e) => { //이메일 중복확인
        e.preventDefault()

        const emExt = /[\w\-\.]+\@[\w\-]+\.[\w\-\.]+/g

        ApiService.userByEm(this.state.m_email)
        .then(res => {
            if(!emExt.test(this.state.m_email)){
                this.setState({
                    emMsg : '올바르지 않은 이메일 형식입니다.',
                    emConfirm : false
                })
            }else if(this.state.m_email === res.data.m_email){
                this.setState({
                    emMsg : '기존에 존재하는 이메일입니다.',
                    emConfirm : false
                })
            }else {
                this.setState({
                    emMsg : '사용 가능한 이메일입니다.',
                    emConfirm : true
                })
            }
        })
        .catch(err => {
            console.log('emailCk 에러', err);
        })
    }

    // -------------------------------------------------- 주소 Api
    openApi = (e) => {
        e.preventDefault()
        this.setState({
            isDaum: true
        })
    }

    closeApi = (e) => { //닫기버튼
        e.preventDefault()
        this.setState({
            isDaum: false
        })
    }

    daumComplete = (data) => { //주소누르면 닫힘
        let fullAddress = data.address;
        let extraAddress = '';
        let zonecode = data.zonecode;

        if(data.addressType === 'R'){ //도로명주소 선택시
            if(data.bname !== ''){
                extraAddress += data.bname;
            }
            if(data.buildingName !== ''){
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName); //특수문자 같이쓰려고 $
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        this.setState({
            m_addr1 : zonecode,
            m_addr2 : fullAddress,
            isDaum: !this.state.isDaum
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

    allChk = () => {
        if(!this.state.allCk){
            if((!(this.state.useCk && this.state.infoCk)) || (this.state.useCk && this.state.infoCk)){
                this.setState({
                    allCk : true,
                    useCk : true,
                    infoCk : true
                })
            }
        }else{
            this.setState({
                allCk : false,
                useCk : false,
                infoCk : false
            })
        }
    }

    useChk = () => {
        if(this.state.useCk){
            if(this.state.allCk){
                this.setState({
                    allCk : false,
                    useCk : false
                })
            }else{
                this.setState({useCk : false})
            }
        }else {            
            this.setState({useCk : true})
        }
    }

    infoChk = () => {
        if(this.state.infoCk){
            if(this.state.allCk){
                this.setState({
                    allCk : false,
                    infoCk : false
                })
            }else{
                this.setState({infoCk : false})
            }
        }else {            
            this.setState({infoCk : true})
        }
    }
    
    // -------------------------------------------------- 회원가입 버튼
    saveUser = (e) => {
        e.preventDefault() //안하면 새로고침됌
        
        var telExt = /010[0-9]{8}/
        var yExt = /[0-9]{4}/
        var mExt = /[0-9]{1,2}/
        var dExt = /[0-9]{1,2}/
                
        if(!telExt.test(this.state.m_tel)){
            alert('전화번호가 올바르지 않습니다')
            return;
        }else if(!yExt.test(this.state.m_year)||!mExt.test(this.state.m_day)||!dExt.test(this.state.m_day)){
            alert('생년월일이 올바르지 않습니다')
            return;
        }else if(!this.state.idConfirm) {
            alert('아이디 중복확인이 필요합니다');
            return;
        }else if(!this.state.emConfirm){
            alert('이메일 확인이 필요합니다');
            return;
        }else if(!(this.state.useCk && this.state.infoCk)){
            alert('이용약관 동의가 필요합니다');
            return;
        }

        let user = {
            m_id: this.state.m_id,
            m_pwd: this.state.m_pwd,
            m_salt: this.state.m_salt,
            m_enPwd: this.state.m_enPwd,
            m_name: this.state.m_name,
            m_email: this.state.m_email,
            m_tel: this.state.m_tel,
            m_addr1: this.state.m_addr1,
            m_addr2: this.state.m_addr2,
            m_addr3: this.state.m_addr3,
            m_year: this.state.m_year,
            m_month: this.state.m_month,
            m_day: this.state.m_day            
        }

        ApiService.joinUser(user) //서버 연결
        .then(res=>{
            window.location.href='/login';
        })
        .catch(err => {
            console.log('saveUser 에러',err);
        })        
    }
    // -------------------------------------------------- return
    render() {
        return (
            <div className={join.container}>
                <div>
                    <p className={join.title}>회원가입</p>
                </div>
                <hr/>

                <form>
                    <div className={join.content}>
                        <p>
                            <label>아이디</label><br/>
                            <input type='text' name='m_id' value={this.state.m_id} onChange={this.onChange}/>
                            <button onClick={this.idCk}>중복확인</button>
                            <span>{this.state.idMsg}</span>
                        </p>
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
                        <p>
                            <label>이름</label><br/>
                            <input type='text' name='m_name' value={this.state.m_name} onChange={this.onChange}/>
                        </p>
                        <p>
                            <label>이메일</label><br/>
                            <input type='email' placeholder='ex) blossom@bls.com' name='m_email' value={this.state.m_email} onChange={this.onChange}/>
                            <button onClick={this.emailCk}>중복확인</button>
                            <span>{this.state.emMsg}</span>
                        </p>
                        <p>
                            <label>휴대전화</label><br/>
                            <input type='text' placeholder='* 숫자만 입력해주세요' name='m_tel' value={this.state.m_tel} onChange={this.onChange}/>
                        </p>
                        <p>
                            <label>주소</label><br/>
                            {this.state.isDaum && (
                                <Modal isOpen={this.state.isDaum} style={ModalSt}>
                                    <button onClick={this.closeApi} style={but1}><img src='./images/closeModal.png' alt='닫기' style={img1}/></button>
                                        <DaumPostcode onComplete={this.daumComplete} style={post} animation={true}/>
                                </Modal>
                            )}
                            <input type='text' name='m_addr2' defaultValue={this.state.m_addr2}/>
                            <button onClick={this.openApi}>주소 찾기</button>
                            <input type='text' placeholder='* 상세주소를 입력하세요 (ex. 501호)' name='m_addr3' value={this.state.m_addr3} onChange={this.onChange}/> 
                        </p>
                        <p>
                            <label>생년월일</label><br/>
                            <input type='text' className={join.birth} placeholder='2022' name='m_year' value={this.state.m_year} onChange={this.onChange}/>년
                            <input type='text' className={join.birth} placeholder='5' name='m_month' value={this.state.m_month} onChange={this.onChange}/>월
                            <input type='text' className={join.birth} placeholder='1' name='m_day' value={this.state.m_day} onChange={this.onChange}/>일
                        </p>
                        <hr/>
                    </div>

                    <div className={join.check}>
                            <label>이용약관 동의</label>
                            <ul>
                                <li><input type='checkbox' name='allCk' checked={this.state.allCk} onClick={this.allChk}/> <b>전체 동의</b></li>    
                                <li><input type='checkbox' name='useCk' checked={this.state.useCk} onClick={this.useChk}/> 이용약관 동의 <span>(필수)</span></li>    
                                <li><input type='checkbox' name='infoCk' checked={this.state.infoCk} onClick={this.infoChk}/> 개인정보 수집/이용 동의 <span>(필수)</span></li>    
                            </ul>
                    </div>

                    <div className={join.final}>
                        <hr/>
                        <button onClick={this.saveUser}>회원가입</button>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default Join;
