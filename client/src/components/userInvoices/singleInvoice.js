import React from 'react'
import axios from 'axios'
// import { useHistory, withRouter } from "react-router-dom";



class SingleInvoice extends React.Component {

    constructor() {
        super()
        this.state = {
            user_invoices: []

        }
    }

    componentDidMount(){
        const url = "https://packin.herokuapp.com/api/v1/invoices"
       axios.get(url)
            .then(response => {
                console.log(response.data.data)
                
                this.setState({ user_invoices: response.data.data })
            })
    }

    render() {

        const{user_invoices}= this.state
        // const payments = [
        //     {
        //         id: 1, inv_id: 1, tansaction_id: 3,
        //         tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
        //     },
        //     {
        //         id: 2, inv_id: 2, tansaction_id: 3,
        //         tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
        //     },
        //     {
        //         id: 3, inv_id: 3, tansaction_id: 3,
        //         tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
        //     },

        //     {
        //         id: 4, inv_id: 3, tansaction_id: 3,
        //         tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
        //     },
        //     {
        //         id: 5, inv_id: 3, tansaction_id: 3,
        //         tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
        //     },
        //     {
        //         id: 6, inv_id: 3, tansaction_id: 3,
        //         tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
        //     },
        //     {
        //         id: 3, inv_id: 3, tansaction_id: 3,
        //         tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
        //     }


        // ]



        return (
            <div className="invoices_tables">
                <table id="col-tab">
                    <thead>
                        <tr className="tbl_header">
                            <th>
                                No.
                        </th>
                            <th>
                                Transaction No
                        </th>
                            <th>
                                Amount
                        </th>
                            <th>
                                Surcharge
                        </th>
                            <th>
                                Date/Time
                        </th>
                            <th>
                                Status
                        </th>
                        </tr>
                    </thead>
                    {user_invoices.map(user_invoice => (
                        <tbody>
                            <tr key={user_invoice.id}>
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
