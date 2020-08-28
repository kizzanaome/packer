import React from 'react'

class SingleInvoice extends React.Component{

    
    render(){
           const payments =[
            { id :1, inv_id:1, tansaction_id:3,
             tansaction_amount:4000, surcharge:500, date_time:"12/10/2020", payment_status:"true"},
             {id :2, inv_id:2, tansaction_id:3,
             tansaction_amount:4000, surcharge:500, date_time:"12/10/2020", payment_status:"true"},
             {id :3, inv_id:3, tansaction_id:3,
                tansaction_amount:4000, surcharge:500, date_time:"12/10/2020", payment_status:"true"},

            {id :4, inv_id:3, tansaction_id:3,
                    tansaction_amount:4000, surcharge:500, date_time:"12/10/2020", payment_status:"true"},
            {id :3, inv_id:3, tansaction_id:3,
                tansaction_amount:4000, surcharge:500, date_time:"12/10/2020", payment_status:"true"}
         ]
       
        return(
            <div className="invoices_tables">
                <table>
                    <tr>
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
                    {payments.map(payment=>(
                    <tr key ={payment.id}>
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
                        <td>
                            <button>
                                Make Payment
                            </button>
                        </td>
                    </tr>
                    ))}
                </table>
         
            </div>
        )
    }
}

export default SingleInvoice;
