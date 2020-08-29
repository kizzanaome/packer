import React from 'react';
import axios from 'axios'
import './user_invoices.css';
// import './singleInvoice'
import SingleInvoice from './singleInvoice';
import Header from '../shared/header';

class UserInvoices extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user_invoice: []

        }
    }

    // componentDidMount(){
    //     const url = "http://api.tvmaze.com/shows"
    //     axios.get(url)
    //         .then(response => {
    //             console.log(response.data[1].name)
    //             // const shows const{user_invoice} =this.state= response.data;
    //             this.setState({ user_invoice: response.data })
    //         })
    // }

    render() {
        return (
                <div className="inv_page_body">
                    <Header/>
                    <div className="all_invoices">
                        <div className="title">
                            <h1>
                                My Invoices
                            </h1>
                        </div>
                        <SingleInvoice/>
                    </div>
                </div>
              )
    }
}

export default UserInvoices;



   //     key={user_invoice.id} 
                        //     id={user_invoice.name}  
                        //     name ={user_invoice.status} 
                        //     genres={user_invoice.genres}
                        //     premiered={user_invoice.premiered}                        
                        // /> 