const Staff = require('../models/staff')
module.exports = (req, res, next) => {

    Staff.findById(req.session.userId, (error, user) => {
        if (error || !user) {
            return res.redirect(req.headers.referer)
        }
        next()
    })

}