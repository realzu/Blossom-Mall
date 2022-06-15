import React from 'react';
import {  BrowserRouter as Router,  Switch,  Route,  Link } from 'react-router-dom';
import Login from './login/Login';
import Join from './login/Join';
import Header from './component/Header';
import MainPg from './component/MainPg';
import AddProduct from './component/add/AddProduct';
import UserInfo from './component/UserInfo';
import FindPwd from './login/FindPwd';
import FindPwdd from './login/FindPwdd';

function App() {
  return (    
      <div className="App">
        {/* <Switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
        <Header/>

        <div style={{paddingTop:50}}></div>

        <Switch>
          <Route path={['/main','/']} component={MainPg} exact/>
          <Route path="/join" component={Join}/>
          <Route path="/login" component={Login}/>
          <Route path="/user-info" component={UserInfo}/>
          <Route path="/find-pwd" component={FindPwd}/>
          <Route path="/find-pwdd" component={FindPwdd}/>

          <Route path="/addProduct" component={AddProduct}/>
          
        </Switch>
      </div>
  );
}

export default App;