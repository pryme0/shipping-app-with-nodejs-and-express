const user = require('../models/Users')
const path = require('path')

module.exports = (req, res) => {

    const { firstname, lastname, companyname, goodtype, email, password, password2, shipnumber, phonenumner } = req.body
    user.findOne({ email: email }).then(
        User => {
            if (User) {
                console.log(User)
                const registrationErrors = "Email already in use "
                req.flash('registrationErrors', registrationErrors)
                return res.redirect('/register')
            }
            if (password != password2) {
                const registrationErrors = "passwords do not match"
                req.flash('registrationErrors', registrationErrors)

                return res.redirect('/register')
            }
            if (password.length < 6 || password2.length < 6) {
                const registrationErrors = "password lenght must be more than 6"
                req.flash('registrationErrors', registrationErrors)

                return res.redirect('/register')
            } else {
                user.create(req.body, (error, user) => {
                    if (error) {
                        registrationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                        req.flash('registrationErrors', registrationErrors)
                        req.flash('data', req.body)
                        return res.redirect('/register')
                    } else {
                        res.redirect('/login')
                    }
                })
            }

        }
    )


}