import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import PaymentForm from '../components/payment/paymentform'
import UserInvoices from '../components/userInvoices/userInvoices'
import history from '../history'
// import SingleInvoice from '../components/userInvoices/singleInvoice'

const Routes =()=>{

    return(
    <BrowserRouter history={history}>
        <Switch>
            <Route path='/makepayment' exact component={PaymentForm}/>
            <Route path='/userinvoices' exact component={UserInvoices}/>
        </Switch>
    </BrowserRouter>
)
}

export default Routes;