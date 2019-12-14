const user = require('../models/Users')
module.exports = async(req, res) => {
    const use = await user.findById(req.session.userId)
    const { firstname, lastname, companyname, goodtype, email, shipnumber, phonenumner } = req.body

    use.updateOne(req.body, (error, updat) => {
        if (error) {
            const updateError = ' Information Update Failed'
            req.flash('updateError', updateError)
            res.redirect('/dashboard')
        } else {
            const updateError = ' Information Updated'
            req.flash('updateError', updateError)
            res.redirect('/dashboard')
        }
    })


}