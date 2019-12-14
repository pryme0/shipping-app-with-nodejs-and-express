const Payment = require('../models/payment')
const ship = require('../models/shipments')

module.exports = async(req, res) => {
    const paymentmethod = req.body.paymentmethod
    const amount = req.body.amount
    const shipmentid = req.session.shipmentid
    const shipingDetails = await ship.findById(shipmentid)
    const paymentfor = shipingDetails.description
    const goods = shipingDetails.goods
    const quantity = shipingDetails.quantity
    const weihhtunit = shipingDetails.unitofweight

    const payee = req.session.userId
    Payment.findOne({ shipmentid: shipmentid }).then(payment => {
        if (payment) {
            const paymentError = ' Payment already made check transctions for details!'
            req.flash('paymentError', paymentError)
            return res.redirect(req.headers.referer)
        } else {
            const status = "paid"
            Payment.create({ status, quantity, shipmentid, goods, paymentmethod, amount, paymentfor, payee }, (error, pay) => {
                if (error) {
                    const paymentError = ' Payment unsucessful try again'
                    req.flash('paymentError', paymentError)
                    return res.redirect(req.headers.referer)
                } else {
                    const paymentError = ' Payment sucessful go to transactions to print reciept'
                    req.flash('paymentError', paymentError)
                    return res.redirect('/dashboard')

                }
            })
        }
    })
}