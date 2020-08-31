import React from 'react'
import Modal from './modal'
// import logo from '../../assets/images/logo2.png'
// import '../payment/paymentform.css'

class Middle extends React.Component {
    state = {
        show: false
    }


    showModelBox = () => {
        this.setState({ show: true })
    }

    hideModelBox = () => {
        this.setState({ show: false })
    }

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
                    <button type="button" onClick={this.showModelBox}>Make Payment</button>
                    <Modal show={this.state.show} handleClose={this.hideModelBox}>
                   
                    </Modal>

                </div>
            </div>

        );
    }
}

export default Middle;
