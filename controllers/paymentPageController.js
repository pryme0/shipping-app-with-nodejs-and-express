const user = require('../models/Users')
const Message = require('../models/message')
module.exports = async(req, res) => {
    const messageId = req.params.messageid
    const userId = req.params.id
    req.session.shipmentid = req.params.shipmentid
    const mess = await Message.findById(messageId)
    const use = await user.findById(userId)
    res.render('payment', {
        use,
        mess,
        paymentError: req.flash('paymentError')
    })
}