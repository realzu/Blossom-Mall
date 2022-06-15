import React, { Component } from 'react';
import ApiService from '../service/ApiService';
import {withRouter} from 'react-router-dom';

class AddUserComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      age: '',
      salary: '',
      message: null
    }

  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value //우린 const {value,name} = e.target 해서 한 단계 더있는느낌
    })
  }

  saveUser = (e) => {
    e.preventDefault(); // 이건 왜했지? 굳이 필요한가 싶음 사이트 이동이 되는데 아래 history.push 나중에 빼볼것
    //안하면 AddUser가 새로고침됨

    let user = {
      username: this.state.username,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      salary: this.state.salary,
    }

    ApiService.addUser(user)
    .then( res => {
        this.setState({
          message: user.username + '님이 성공적으로 등록되었습니다.'
        })
        console.log(this.state.message);
        // this.props.history.push('/users'); // push가 안되면 message가 남아 있으려나??
        window.location.replace('/users');
    })
    .catch( err => {
      console.log('saveUser() 에러', err);
    });

  }

  render(){
      
    return(
      <div>
        <h2>Add User</h2>
        <form>
          <div>
            <label>User Name:</label>
            <input type="text" placeholder="이름" name="username" value={this.state.username} onChange={this.onChange} />
          </div>

          <div>
            <label>Password:</label>
            <input type="password" placeholder="비밀번호" name="password" value={this.state.password} onChange={this.onChange} />
          </div>

          <div>
            <label>First Name:</label>
            <input placeholder="성" name="firstName" value={this.state.firstName} onChange={this.onChange} />
          </div>

          <div>
            <label>Last Name:</label>
            <input placeholder="이름" name="lastName" value={this.state.lastName} onChange={this.onChange} />
          </div>

          <div>
            <label>Age:</label>
            <input type="number" placeholder="나이" name="age" value={this.state.age} onChange={this.onChange} />
          </div>

          <div>
            <label>Salary:</label>
            <input type="number" placeholder="급여" name="salary" value={this.state.salary} onChange={this.onChange} />
          </div>

          <button onClick={this.saveUser}>Save</button>

        </form>
      </div>
    );
  }
}

export default withRouter(AddUserComponent);