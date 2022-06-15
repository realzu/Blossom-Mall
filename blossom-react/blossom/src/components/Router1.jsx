import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Order from './Order';
import Cart from './Cart.jsx';
import sucessPay from './sucessPay';

const AppRouter = () => {
return(
<div>

<Switch>
<Route exact path="/" component={Cart} />
<Route path="/cart" component={Cart} />
<Route path="/order" component={Order} />
<Route path="/sucessPay" component={sucessPay} />
</Switch>

</div>
);
}
export default AppRouter;