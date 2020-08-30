import React from 'react'
import { useHistory, withRouter } from "react-router-dom";



class SingleInvoice extends React.Component {

    render() {
        const payments = [
            {
                id: 1, inv_id: 1, tansaction_id: 3,
                tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
            },
            {
                id: 2, inv_id: 2, tansaction_id: 3,
                tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
            },
            {
                id: 3, inv_id: 3, tansaction_id: 3,
                tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
            },

            {
                id: 4, inv_id: 3, tansaction_id: 3,
                tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
            },
            {
                id: 5, inv_id: 3, tansaction_id: 3,
                tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
            },
            {
                id: 6, inv_id: 3, tansaction_id: 3,
                tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
            },
            {
                id: 3, inv_id: 3, tansaction_id: 3,
                tansaction_amount: 4000, surcharge: 500, date_time: "12/10/2020", payment_status: "true"
            }


        ]



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
                    {payments.map(payment => (
                        <tbody>
                            <tr key={payment.id}>
                                <td>
                                    {payment.id}
                                </td>

                                <td>
                                    {payment.tansaction_id}
                                </td>
                                <td>
                                    {payment.tansaction_amount}
                                </td>
                                <td>
                                    {payment.surcharge}
                                </td>
                                <td>
                                    {payment.date_time}
                                </td>
                                <td>
                                    {payment.payment_status}

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
