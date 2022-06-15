import React, { Component, useState } from 'react';
import {withRouter} from 'react-router-dom';
import ApiService from '../service/ApiService';
import '../assets/css/UserList.css'
import Postcode from './PostCode';

class UserListComponent extends Component{

    constructor(props){ 
      super(props);
  
      this.state = {
        users: [],
        message: null
      }
    }
  
    componentDidMount(){
      this.reloadUserList();
    }
  
    reloadUserList = () => { // 유저조회
      ApiService.fetchUsers()
        .then( res => {
          this.setState({
            users: res.data,
            message: 'User reload Successfully.'
          })
        })
        .catch(err => {
          console.log('reloadUserList() Error!', err);
        })
    }
  
    deleteUser = (userID) => {
      ApiService.deleteUser(userID)
        .then( res => {
          this.setState({
            message: 'User Deleted Successfully.'
          });
          this.setState({
            users: this.state.users.filter( user =>
              user.id !== userID)
            });
          })
        .catch(err => {
          console.log('deleteUser() Error!', err);
        })
    }
    
    editUser = (ID) => {
      window.localStorage.setItem("userID", ID);
      // this.props.history.push('/edit-user');
      // history로 갈시 갑자기 새로고침이 안됩니다.
      window.location.replace('/edit-user');
    }
  
    addUser = () => {
      window.localStorage.removeItem("userID");
      // this.props.history.push('/add-user');
      // history로 갈시 갑자기 새로고침이 안됩니다.
      window.location.replace('/add-user');
    }
  
    render(){
      
      return(
        
        <div className='userListBox'>
          <h2>User List</h2>
          <button onClick={this.addUser}> Add User </button>
          <table className='userList'>
            <thead>
              <tr>
                <th>ID</th>
                <th>성</th>
                <th>이름</th>
                <th>닉네임</th>
                <th>나이</th>
                <th>급여</th>
                <th>수정/삭제</th>
              </tr>
              <tr>
                <th colSpan={8}>
                  <hr/>
                </th>
              </tr>
            </thead>
            
            <tbody>
              {this.state.users.map( user => 
              <>
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.username}</td>
                  <td>{user.age}</td>
                  <td>{user.salary}</td>
                  <td>
                    <button onClick={() => this.editUser(user.id)}>Edit</button>&nbsp;
                    <button onClick={() => this.deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td colSpan={8}>
                    <hr/>
                  </td>
                </tr>
              </>
              )}
              
              <tr>
                <td colSpan='8'>{this.state.message}</td>
              </tr>
            </tbody>
          </table>
          {/* <Postcode/> */}
         </div>
      );
      
    }
  
  }

export default withRouter(UserListComponent);

