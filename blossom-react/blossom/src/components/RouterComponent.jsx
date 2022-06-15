import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AddOrders from '../order/AddOrders';
import Orders from '../order/Orders';
import AddProductComponent from '../product/AddProductComponent';
import FileUpload from '../product/FileUpload';
import Product from '../product/Product';
import ProductDetail from '../product/ProductDetail';
// import ProductInS from '../product/ProductInS';
// import AddUserComponent from '../user/AddUserComponent';
// import UserListComponent from '../user/UserListComponent';
// import EditUserComponent from '../user/EditUserComponent';


const AppRouter = () => {
   return(
    
     <div style={style}>
       
          <Switch>
            {/* <Route exact path="/" component={UserListComponent} />
            <Route path="/users" component={UserListComponent} />
            <Route path="/edit-user" component={EditUserComponent} />
            <Route path="/add-user" component={AddUserComponent} /> */}
            {/*
            <Route exact path="/" component={product} />
            <Route path="/list-product" component={product} />
          */}
            <Route exact path="/" component={Product} />
            <Route path="/list-product" component={Product} />
            <Route path="/add-product" component={AddProductComponent} />
            <Route path="/add-fileUpload" component={FileUpload} />
            <Route path="/productDetail" component={ProductDetail}/>
            <Route path="/add-orders" component={AddOrders}/>

            {/* 주문 */}
            {/* <Route exact path="/" component={Orders} />
            <Route path="/orders" component={Orders} /> */}
          </Switch>
         
     </div>
     
   );
}

const style = {
  marginTop: '20px'
}

export default AppRouter;