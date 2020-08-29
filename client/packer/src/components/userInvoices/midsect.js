import React from 'react'
// import logo from '../../assets/images/logo2.png'
// import '../payment/paymentform.css'

class Middle extends React.Component {
    render() {

        return (
            <div className="middle">
            <div className="middle-bar">

                <h2>All invoices</h2>
                <input
                    className=""
                    type="text"
                    placeholder="Search Invoice"
                />
                <button type="button">Make Payment</button>

            </div>
            </div>

        );
    }
}

export default Middle;
