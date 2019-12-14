const Staff = require('../models/staff')
const path = require('path')

module.exports = (req, res) => {
    const num = Math.floor(Math.random() * 2000) + 1
    employeenumber = "Stf" + num
    const { firstname, lastname, department, email, password, password2, phonenumner } = req.body

    Staff.findOne({ email: email }).then(
        staff => {
            if (staff) {
                const registrationErrors = "Email already in use "
                req.flash('registrationErrors', registrationErrors)
                return res.redirect('/admin')
            }
            if (password != password2) {
                const registrationErrors = "passwords do not match"
                req.flash('registrationErrors', registrationErrors)

                return res.redirect('/admin')
            }
            if (password.length < 6 || password2.length < 6) {
                const registrationErrors = "password lenght must be more than 6"
                req.flash('registrationErrors', registrationErrors)

                return res.redirect('/admin')
            } else {
                Staff.create({...req.body, employeenumber }, (error, user) => {
                    if (error) {
                        registrationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
                        req.flash('registrationErrors', registrationErrors)
                        req.flash('data', req.body)
                        return res.redirect('/admin')
                    } else {
                        res.redirect('/stafflogin')
                    }
                })
            }

        }
    )


}