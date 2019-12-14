const Message = require('../models/message')
module.exports = async(req, res) => {
    const requester = req.params.id
    const message = ' Shipment request was declined please contact admin'
    Message.create({ requester, message }, (error, sent) => {
        if (error) {
            const messageError = ' message was not sent'
            console.log(error)
            req.flash('messageError', messageError)
            return res.redirect('/admin')
        } else {
            const messageError = ' Decline message sent'
            req.flash('messageError', messageError)
            return res.redirect('/admin')
        }
    })

}