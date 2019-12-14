const user = require('../models/Users')
const shi = require('../models/shipments')
const message = require('../models/message')
const payment = require('../models/payment')
module.exports = async(req, res) => {
    userid = req.session.userId
    const ship = await shi.find({ requester: userid }).populate('requester')
    const cost = ship.cost
    const Message = await message.find({ requester: userid })
    const Payment = await payment.find({ payee: userid }).populate('payee')
    const use = await user.findById(userid)
    res.render('dashboard', {

        Payment,
        use,
        ship,
        Message,
        errors: req.flash('registrationErrors'),
        updateError: req.flash('updateError'),
        deletemess: req.flash('deleteMessage'),
        paymentError: req.flash('paymentError')

    })
}