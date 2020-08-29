const {
    createUser,
    login,
    allUsers
} = require('./user.controller');

const router = require('express').Router();
const { validateToken } = require('../../authenticate/token_validation');

router.post('/register', createUser);
router.post('/login', login);
router.get('/users', allUsers);

module.exports = router;
