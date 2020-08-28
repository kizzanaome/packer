const pool = require('../../config/database');

module.exports = {

    create: (data, callback) => {
        pool.query(
            `insert into users(first_name, last_name, email, username, password)
            values(?, ?, ?, ?, ?)`,
            [
                data.first_name,
                data.last_name,
                data.email,
                data.username,
                data.password,
            ],
            (error, results, fields) => {
                if(error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    getUserByEmail: (email, callBack) => {
        pool.query(
            `select * from users where email = ?`,
            [email],
            (error, results, fields) => {
                if(error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};
