const Staff = require('../models/staff')
const bcrypt = require('bcrypt')
module.exports = (req, res) => {
    const { email, password } = req.body
    Staff.findOne({ email }, (error, staff) => {
        if (staff) {
            bcrypt.compare(password, staff.password, (error, same) => {
                if (same) {
                    req.session.userId = staff._id
                    req.session.fname = staff.firstname
                    req.session.lname = staff.lastname
                    req.session.employeeId = staff.employeenumber
                    req.session.department = staff.department
                    console.log(req.session.department)
                    if (req.session.department == 'accounting') {
                        return res.redirect('/account')
                    } else if (req.session.department == 'Inventory') {
                        return res.redirect('/inventory')
                    } else if (req.session.department == 'Admin') {
                        return res.redirect('/admin')
                    }
                    res.redirect('/admin')

                } else {
                    console.log("wrong password")
                    const loginError = "Password incorrect"
                    req.flash('loginError', loginError)
                    res.redirect('/stafflogin')
                }
            })
        } else {
            const loginError = "User not found"
            req.flash('loginError', loginError)
            console.log("user not found")
            res.redirect('/stafflogin')
        }

    })

}