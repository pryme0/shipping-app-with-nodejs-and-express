const User = require('../models/Users')
module.exports = (req, res, next) => {

    if (req.session.userId) {
        return res.redirect('/dashboard')
    }

    next()

}