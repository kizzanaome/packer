import React from 'react'
import axios from 'axios'
// import { useHistory, withRouter } from "react-router-dom";


class SingleInvoice extends React.Component {

    // initialise state with empty array
    constructor() {
        super()
        this.state = {
            user_invoices: []

        }
    }

    // Fetch data from the url when the component mounts
    // (at the start of the application)
    componentDidMount() {
        const url = "https://packin.herokuapp.com/api/v1/invoices"
        axios.get(url)
            .then(response => {
                console.log(response.data.data)

                this.setState({ user_invoices: response.data.data })
            })
    }

    render() {

        const { user_invoices } = this.state

        return (
            <div className="invoices_tables">
                <table id="col-tab">
                    <thead>
                        <tr className="tbl_header">
                            <th></th>
                            <th>No.</th>
                            <th>Transaction No</th>
                            <th> Amount</th>
                            <th>Surcharge</th>
                            <th>Date/Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {user_invoices.map(user_invoice => (
                        <tbody>
                            <tr key={user_invoice.id}>
                                <td>
                                    <input className="invoice_checkbox" type="checkbox" id={user_invoice.id} name="" value="" />
                                </td>
                                <td>
                                    {user_invoice.id}
                                </td>

                                <td>
                                    {user_invoice.transaction_number}
                                </td>
                                <td>
                                    {user_invoice.transaction_amount}
                                </td>
                                <td>
                                    {user_invoice.surcharge}
                                </td>
                                <td>
                                    {user_invoice.transaction_date}
                                </td>
                                <td>
                                    {user_invoice.payment_status}

                                </td>
                                {/* <td>
                            <button type="button" onClick={() =>{ history.push('/makepayment')
                                                                window.location.reload()}}>
                                Make Payment
                            </button>   
                        </td> */}
                            </tr>
                        </tbody>
                    ))}

                </table>

            </div>
        )
    }
}

export default SingleInvoice;
