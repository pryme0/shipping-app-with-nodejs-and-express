const payment = require('../models/payment')
module.exports = async(req, res) => {
    const del = await payment.findById(req.params.id).deleteOne()
    if (del) {
        const deleteMessage = 'Payment Record deleted sucessfully'
        req.flash('deleteMessage', deleteMessage)
    } else {
        deleteMessage = 'Payment Record was not deleted'
        req.flash('deleteMessage', deleteMessage)
    }
    res.redirect('/dashboard')
}