const user = require('../models/Users')
const ship = require('../models/shipments')
const payment = require('../models/payment')
const staff = require('../models/staff')
module.exports = async(req, res) => {
    const userId = req.session.userId
    const staf = await staff.findById(userId)
    const Payment = await payment.find({}).populate('payee')

    if (staf.department != 'Admin') {
        res.redirect(req.headers.referer)
    }
    const users = await user.find({})
    const staffs = await staff.find({})
    const Ship = await ship.find({}).populate('requester')

    const Staff = await staff.findById(req.session.userId)
    let totalRevenue = 0
    Payment.forEach(pay => {
        totalRevenue += parseInt(pay.amount)
    })

    res.render('admin', {
        errors: req.flash('registrationErrors'),
        messError: req.flash('messageError'),
        fullname: req.session.fname + ' ' + req.session.lname,
        employeenum: req.session.employeeId,
        users,
        staffs,
        Staff,
        Ship,
        totalRevenue
    })

}