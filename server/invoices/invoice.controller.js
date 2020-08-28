const { getInvoices } = require('./invoice.service');

// const { genSaltSync, hashSync, compareSync } = require('bcrypt');

// const { sign } = require('jsonwebtoken');

module.exports = {

    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);

        create(body, (error, data) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    message: 'Cant connect to the database'
                });
            }
            return res.status(200).json({
                data: res.body,
                message: 'User registered successfully'
            });
        });
    },

    login: (req, res) => {
        const body = req.body;
        getUserByEmail(body.email, (error, results) => {
            if (error) {
                console.log(error);
                return res.status(500).json({
                    message: 'Something went wrong'
                });
            }
            if (!results) {
                return res.status(404).json({
                    message: 'invalid email address'
                });
            }
            const result = compareSync(body.password, results.password);
            if (result) {
                results.password = undefined;
                const jsontoken = sign({ results: results }, "douglas", {
                    expiresIn: "30min"
                });
                return res.status(200).json({
                    data: res.body,
                    message: 'login successfully',
                    token: jsontoken
                });
            } else {
                return res.status(404).json({
                    message: 'invalid email address'
                });
            }
        });
    }
};
