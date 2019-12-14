const user = require('../models/Users')
module.exports = async(req, res) => {
    res.render('login', {
        errors: req.flash('loginError')
    })

}