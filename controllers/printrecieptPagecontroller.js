const payment = require('../models/payment')
module.exports = async(req, res) => {
    const paymentId = req.params.id
    const userId = req.session.userId
    const pay = await payment.findById(paymentId).populate('payee')

    res.render('reciept', {
        pay
    })
}