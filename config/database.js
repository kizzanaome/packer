const { createPool } = require('mysql');

const pool = createPool({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST || process.env.HR_HOST,
    user: process.env.DB_USER || process.env.HR_USER,
    password: process.env.DB_PASS || process.env.HR_PASS,
    database: process.env.MYSQL_DB || process.env.HR_MYSQL_DB,
    connectionLimit: 20
});

module.exports = pool;
