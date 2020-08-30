const {
    allInvoices
} = require('./invoice.controller');

const router = require('express').Router();
const { validateToken } = require('../../authenticate/token_validation');

router.get('/invoices', allInvoices)

module.exports = router;
