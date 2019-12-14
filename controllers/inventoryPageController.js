const staff = require('../models/staff')
const ship = require('../models/shipments.js')
module.exports = async(req, res) => {
    const Staff = await staff.findById(req.session.userId)
    const Ship = await ship.find({}).populate('requester')
    res.render('inventory', {
        Staff,
        Ship
    })

}