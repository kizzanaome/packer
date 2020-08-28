const { createUser, login } = require('./user.controller');
const router = require('express').Router();
const { validateToken } = require('../../authenticate/token_validation');

router.post('/register', validateToken, createUser);
router.post('/login', login);

module.exports = router;
