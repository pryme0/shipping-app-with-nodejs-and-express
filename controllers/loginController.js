const User = require('../models/Users')
const bcrypt = require('bcrypt')
module.exports = (req, res) => {
    const { email, password } = req.body
    User.findOne({ email }, (error, user) => {
        if (user) {
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    req.session.userId = user._id
                    req.session.fname = user.firstname
                    req.session.lname = user.lastname
                    res.redirect('/dashboard')
                } else {
                    const loginError = "Password incorrect"
                    req.flash('loginError', loginError)
                    res.redirect('/login')
                }
            })
        } else {
            const loginError = "User not found"
            req.flash('loginError', loginError)
            res.redirect('/login')
        }

    })

}