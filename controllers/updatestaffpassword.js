const staff = require('../models/staff')
const bcrypt = require('bcrypt')

module.exports = async(req, res) => {
    const staffs = await staff.findById(req.session.userId)
    let { password } = req.body
    password = req.body.password
    console.log(password)

    bcrypt.hash(password, 10, function(error, encrypted) {
        password = encrypted
        staffs.updateOne({ password }, (erro, updat) => {
            if (erro) {
                const updateError = ' Information Update Failed'
                req.flash('updateError', updateError)
                res.redirect(req.headers.referer)
            } else {
                const updateError = ' Information Updated'
                req.flash('updateError', updateError)
                res.redirect(req.headers.referer)
            }

        })

    })


}