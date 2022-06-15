import React, { Component } from 'react';
import ApiService from '../service/ApiService';
import {withRouter} from 'react-router-dom';

class EditUserComponent extends Component{

  constructor(props){
    super(props);

    this.state = {
      id: '',
      firstName: '',
      lastName: '',
      age: '',
      salary: '',
      message: null
    }
  }

  componentDidMount(){
    this.loadUser();
  }

  loadUser = () => {
    ApiService.fetchUserByID(window.localStorage.getItem("userID")) //localhost:8080/{id} 컨트롤러 주소 한것과 같아요
      .then( res => {
        let user = res.data;
        this.setState({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age,
          salary: user.salary
        })
      })
      .catch(err => {
        console.log('loadUser() 에러', err);
      });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  saveUser = (e) => {
    e.preventDefault();

    let user = {
      id: this.state.id,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      salary: this.state.salary
    }

    ApiService.editUser(user)
      .then( res => {
        this.setState({
          message : user.lastName + '님 정보가 수정되었습니다.'
        })
        this.props.history.push('/users');
      })
      .catch(err => {
        console.log('saveUser() 에러', err);
      })
  }

  render(){
    return(
      <div>
        <h2>Edit User</h2>
        <form>
          <div>
            <label>User Name:</label>
            <input type="text" name="username" readOnly="true" defaultValue={this.state.username} />
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

export default withRouter(EditUserComponent);