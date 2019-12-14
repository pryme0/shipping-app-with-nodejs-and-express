const user = require('../models/staff')
module.exports = async(req, res) => {
    const use = await user.findById(req.session.userId)
    console.log(req.session.userId)
    const { firstname, lastname, employeenumber, email, phonenumner, department } = req.body

    use.updateOne(req.body, (error, updat) => {
        if (error) {
            const updateError = ' Information Update Failed'
            req.flash('updateError', updateError)
            res.redirect(req.headers.referer)
        } else {
            const updateError = ' Information Updated'
            req.flash('updateError', updateError)
            res.redirect(req.headers.referer)
        }
    })


}