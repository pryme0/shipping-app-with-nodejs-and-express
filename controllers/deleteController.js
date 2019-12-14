const staff = require('../models/staff')
module.exports = async(req, res) => {
    const del = await staff.findById(req.params.id).deleteOne()
    res.redirect(req.headers.referer)

}