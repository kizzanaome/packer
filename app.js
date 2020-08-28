require('dotenv').config();
const express = require('express');

const app = express();
const userRouter = require('./server/users/user.router');

app.use(express.json());

app.use('/api/v1', userRouter);

app.get('/api/v1', (req, res) => {
    res.json({
        message: 'Application ready'
    });
});

app.listen(process.env.APP_PORT, () => {
    console.log('Application is up and running on PORT: ', process.env.APP_PORT, '\n');
});
