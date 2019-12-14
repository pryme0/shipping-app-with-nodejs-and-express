const user = require('../models/staff')
module.exports = async(req, res) => {
    res.render('stafflogin', {
        errors: req.flash('loginError')
    })

}