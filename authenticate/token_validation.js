const { verify } = require('jsonwebtoken');

module.exports = {
    
    validateToken: (req, res, next) => {
        let token = req.get('authorization');
        if (token) {
            token = token.slice(7);
            verify(token, "douglas", (error, decoded) => {
                if (error) {
                    return res.status(500).json({
                        message: 'Token invalid'
                    });
                } else {
                    next();
                }
            });
        } else {
            return res.status(200).json({
                message: 'You have no permission to do this'
            });
        }
    }
}
