import React, { Component } from 'react';
import ApiService from '../service/ApiService';
import faq from '../assets/css/faq.module.css'

class NoticeUp extends Component{

  constructor(props){
    super(props);

    this.state = {
      N_title: '',
      N_contents: ''
    }

  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value //우린 const {value,name} = e.target 해서 한 단계 더있는느낌
    })
  }

  NoticeUp = (e) => {
    e.preventDefault(); // 이건 왜했지? 굳이 필요한가 싶음 사이트 이동이 되는데 아래 history.push 나중에 빼볼것
    //안하면 AddUser가 새로고침됨

    let notice = {
        n_title: this.state.N_title,
        n_contents: this.state.N_contents
    }

    ApiService.addNotice(notice)
    .then( res => {
        this.setState({
          message: '공지 등록 성공.'
        })
        console.log(this.state.message);
        this.props.history.push('/'); 
    })
    .catch( err => {
      console.log('NoticeUp() 에러', err);
    });

  }

  render(){
    return(
      
      <div className={faq.container}>
        <div className={faq.box}>
        <h2>공지 등록</h2>
        <form>
          <div className={faq.label}>
           <label>제목:</label>
          </div>
          <div>
            <input type="text" placeholder="제목" name="N_title" value={this.state.N_title} onChange={this.onChange} className={faq.input}/>
          </div>
          <div className={faq.label}>
           <label>내용:</label>
          </div>
          <div>
            <textarea style={{height:200, resize: 'none'}} placeholder="내용" name="N_contents" value={this.state.N_contents} onChange={this.onChange} className={faq.input}/>
          </div>

          <button onClick={this.NoticeUp}>등록</button>

        </form>
        </div>
      </div>
    );
  }
}

export default NoticeUp;