const staff = require('../models/staff')
const payment = require('../models/payment')
const price = require('../models/shipprice')
module.exports = async(req, res) => {
    const Staff = await staff.findById(req.session.userId)
    const Payment = await payment.find({}).populate('payee')
    const Price = await price.find({})
    const department = req.session.department
    let totalRevenue = 0
    Payment.forEach(pay => {
        totalRevenue += parseInt(pay.amount)
    })
    console.log(totalRevenue)



    res.render('account', {
        Staff,
        Payment,
        Deletemess: ' hello',
        Price,
        updateError: req.flash('updateError'),
        totalRevenue
    })


}