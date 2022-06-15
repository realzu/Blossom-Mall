import React, { Component } from 'react';
import ApiService from '../service/ApiService';
import join from '../assets/css/Join.module.css';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import MypageTop from './MypageTop';
import MypageInfo from './MypageInfo';
import mypage from '../assets/css/Mypage.module.css'

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

class UserInfo extends Component {
    constructor(props){
        super(props);

        this.state = {
            m_id: '',
            m_name: '',
            m_email: '',
            m_tel: '',
            m_addr1: '',
            m_addr2: '',
            m_addr3: '',
            m_year: '',
            m_month: '',
            m_day: '',
            emMsg: null,
            emConfirm: null,
            isDaum: false,
        }
    }
    
    componentDidMount(){
        this.infoLoad()
    }

    infoLoad = () => {
        ApiService.userById(window.localStorage.getItem('id'))
        .then(res=>{

            this.setState({
                m_id: res.data.m_id,
                m_name: res.data.m_name,
                m_email: res.data.m_email,
                m_tel: res.data.m_tel,
                m_addr1: res.data.m_addr1,
                m_addr2: res.data.m_addr2,
                m_addr3: res.data.m_addr3,
                m_year: res.data.m_year,
                m_month: res.data.m_month,
                m_day: res.data.m_day,
            })
        })
        .catch(err=>{
            console.log('infoLoad 에러',err)
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value, // const{value,name} = e.target 을 생략
        })
    }

    // -------------------------------------------------- 각각의 가입조건확인
    emailCk = (e) => { //이메일 중복확인
        e.preventDefault()

        const emExt = /[\w\-\.]+\@[\w\-]+\.[\w\-\.]+/g

        ApiService.userById(this.state.m_id)
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
        }

        let user = {
            m_id: this.state.m_id,
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

        ApiService.updateUser(user)
        .then(res=>{
            window.location.replace('/main');
        })
        .catch(err => {
            console.log('updateUser 에러',err);
        })        
    }
    // -------------------------------------------------- return
    render() {
        return (
            <div className={mypage.container}>
            <div className={mypage.menu}>
                <MypageTop/>
            </div>
            <div className={mypage.my}> 
                <MypageInfo/>
            </div>
            <div className={join.container}>
                <div>
                    <p className={join.title}>회원정보 수정</p>
                </div>
                <hr/>

                <form>
                    <div className={join.content}>
                        {/* <p>
                            <label>새 비밀번호</label><br/>
                            <input type='password' placeholder='* 영문자,숫자,특수문자(!@#$%^)가 포함된 8~20자' name='m_newPwd' value={this.state.m_newPwd} onChange={this.onChange}/>
                        </p>
                        <p>
                            <label>새 비밀번호 확인</label><br/>
                            <input type='password' placeholder='* 비밀번호를 한번 더 입력해주세요' name='m_newPwdck' value={this.state.m_newPwdck} onChange={this.onChange}/>
                            <button onClick={this.pwdEncrypt}>확인</button>
                            <span>{this.state.pwdMsg}</span>
                        </p>  */}
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

                        <div className={join.final}>
                            <hr/>
                            <button onClick={this.saveUser}>회원정보 수정</button>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default UserInfo;