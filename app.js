require('dotenv').config();
const express = require('express');
// const request = require('request');
const cors = require('cors')

const app = express();
const userRouter = require('./server/users/user.router');
const invoiceRouter = require('./server/invoices/invoice.router');

const PORT = process.env.PORT || process.env.APP_PORT

app.use(express.json());
app.use(cors());
// app.use((req, res, next) => {
//     res.header('Acess-Control-Allow-Origin', '*');
//     next();
// });

app.use('/api/v1', userRouter);
app.use('/api/v1', invoiceRouter);

app.get('/api/v1', (req, res) => {
    return res.status(200).json({
        message: 'Packer is good to go!!!!!'
    });
});

app.listen(PORT, () => {
    console.log('Application is up and running on PORT: ', PORT, '\n');
});
