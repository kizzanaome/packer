const pool = require('../../config/database');

module.exports = {

    // getUserByEmail: (email, callBack) => {
    //     pool.query(
    //         `select * from users where email = ?`,
    //         [email],
    //         (error, results, fields) => {
    //             if (error) {
    //                 return callBack(error);
    //             }
    //             return callBack(null, results[0]);
    //         }
    //     );
    // },

    getInvoices: callBack => {
        pool.query(
            `select id, transaction_number, transaction_amount, surcharge, transaction_date, payment_status from invoices`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
};
