import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApiService from '../service/ApiService';
import join from '../assets/css/Join.module.css';

class FindPwd extends Component {

    constructor(props){
        super(props);

        this.state = {
            m_id : '',
            m_name : ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    find = (e) => {
        e.preventDefault()

        ApiService.userById(this.state.m_id)
        .then(res => {
            if(this.state.m_id !== res.data.m_id){
                alert('회원정보가 없습니다.')
                return;
            }else if(this.state.m_name !== res.data.m_name){
                alert('회원정보가 없습니다.')
                return;
            }            
        })
        .catch(err => {
            console.log('find 에러', err)
        })

        window.localStorage.setItem('id',this.state.m_id);
        this.props.history.push('/find-pwdd');
    }


    render() {
        return (
            <div className={join.container} id={join.find}>
                <div>
                    <p className={join.title}>비밀번호 찾기</p>
                </div>                
                
                <form>
                    <div className={join.content}>
                        <hr/>
                        <p>
                            <label>아이디</label><br/>
                            <input type='text' name='m_id' value={this.state.m_id} onChange={this.onChange}/>
                        </p>

                        <p>
                            <label>이름</label><br/>
                            <input type='text' name='m_name' value={this.state.m_name} onChange={this.onChange}/>
                        </p>
                        <hr/>      
                    </div>

                    <div className={join.final}>
                        
                        <button onClick={this.find}>비밀번호 찾기</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default FindPwd;