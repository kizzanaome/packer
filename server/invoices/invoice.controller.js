const { getInvoices } = require('./invoice.service');

module.exports = {

    allInvoices: (req, res) => {
        getInvoices((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                data: results
            });
        });
    },
};
