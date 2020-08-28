import React from 'react'
// import axios from 'axios'

import './paymentform.css'

const initialState = {
    inv_id: "",
    amount_paid: "",
    date_time_paid: "",
    created_by: "",
    payment_mode: "",
    paid_by: "",
    paid_by_phone_number: "",
    errors: {
        inv_id: "",
        amount_paid: "",
        date_time_paid: "",
        created_by: "",
        payment_mode: "",
        paid_by: "",
        paid_by_phone_number: "",
    }
}


const validateForm = ({ errors, ...rest }) => {
    // let errors ={}
    let formIsValid = true

    // validate form errors being empty
    Object.values(errors).forEach(val => {
        val.length > 0 && (formIsValid = false);
    })


    // validate the form was filled out
    Object.values(rest).forEach(val => {
        val === "" && (formIsValid = false);
    });


    // if (!this.state.inv_id || !this.state.amount_paid ||
    //     !this.state.date_time_paid ||  !this.state.created_by || 
    //     !this.state.payment_mode || !this.state.paid_by
    //     || !this.state.paid_by_phone_number ){
    //     formIsValid = false
    //     errors["inv_id"]= "Feild cant"
    // }

    // if (this.state.amount_paid) {
    //     if (!this.state.amount_paid.match(/^\w+$/)) {
    //         formIsValid = false
    //         errors['amount_paid'] = '*Please use alphanumeric characters only'
    //     }
    // }

    // this.setState({ errors })
    return formIsValid
}


class PaymentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState

    }

    onChange = (e) => {
        const { name, value } = e.target
        let errors = { ...this.state.errors };

        switch (name) {
            case "inv_id":
                errors.inv_id =
                    value.length < 3 ? "minimum 3 characters required" : "";
                    // value.match(/^\w+$/) ? "Please use only alphanumeric:"";
                break;
            case "amount_paid":
                errors.amount_paid =
                    value.length < 6 ? "minimum 20 characters required" : "";

                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value }, () => console.log(this.state))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (validateForm(this.state)) {
            console.log(`
            --SUBMITTING--
            inv_id: ${this.state.inv_id}
            amount_paid: ${this.state.amount_paid}
            date_time_paid: ${this.state.date_time_paid}
            paid_by: ${this.state.paid_by}
          `);
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    };



    render() {
        const { inv_id,
            amount_paid,
            date_time_paid,
            created_by,
            payment_mode,
            paid_by,
            paid_by_phone_number } = this.state

        const { errors } = this.state
        console.log(errors)
        return (
            <div className="content">
                <div className="form_fields">

                    <h1>
                        Make payment
                    </h1>
                    <div className="form_elements">
                        <form onSubmit={this.onSubmit} className="payment_form">
                            <input
                                className={errors.inv_id.length > 0 ? "error" : ""}
                                type="text"
                                placeholder="Enter Invoice"
                                value={inv_id}
                                name="inv_id"
                                onChange={this.onChange}
                            />

                            {errors.inv_id.length > 0 && (
                                <div className=" errmsg">{errors.inv_id}</div>)}
                            <input
                                className={errors.amount_paid.length > 0 ? "error" : ""}
                                type="text"
                                placeholder="Amount to be Paid"
                                name="amount_paid"
                                value={amount_paid}
                                onChange={this.onChange}
                                pattern="[0-9]*"
                                inputmode="numeric"
                            />
                            {errors.amount_paid.length > 0 && (
                                <div className="errmsg">{errors.amount_paid}</div>)}

                            <input
                                type="date"
                                id="paye_date"
                                placeholder="Input Date"
                                name="date_time_paid"
                                value={date_time_paid}
                                onChange={this.onChange}

                            />

                            <div className="errmsg">{this.state.errors.date_time_paid}</div>

                            <input
                                type="text"
                                placeholder="Created by"
                                name="created_by"
                                value={created_by}
                                onChange={this.onChange}

                            />

                            <div className="errmsg">{this.state.errors.created_by}</div>

                            <input
                                type="text"
                                placeholder="Paid By"
                                name="paid_by"
                                value={paid_by}
                                onChange={this.onChange}

                            />
                            <div className="errmsg">{this.state.errors.paid_by}</div>

                            <input
                                type="tel"
                                placeholder="Payee Phone Number"
                                name="paid_by_phone_number"
                                value={paid_by_phone_number}
                                pattern="^-?[0-9]\d*\.?\d*$"
                                onChange={this.onChange}

                            />

                            <div className="errmsg">{this.state.errors.paid_by_phone_number}</div>


                            <select name="payment_mode" id="payment_mode" className="payment_mode" value={payment_mode} onChange={this.onChange}>
                                <option value="cash">Select Mode of Payment</option>
                                <option value="cash">Cash</option>
                                <option value="cash">Check</option>
                                <option value="cash">Mobile Money</option>
                                <option value="cash">Sticker</option>
                                <option value="cash">Ticket</option>
                            </select>

                            <button>
                                Make Payment
                        </button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default PaymentForm;