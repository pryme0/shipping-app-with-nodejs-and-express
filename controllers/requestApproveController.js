const Message = require('../models/message')
const ship = require('../models/shipments')
module.exports = async(req, res) => {
    const requester = req.params.id
    const shipmentid = req.params.identity
    const shi = await ship.findById(req.params.identity)
    const cost = shi.quantity * 2000
    const status = 'Approved'
    const description = ' Shipment of ' + shi.quantity + ' ' + shi.goods + ' to ' + shi.destination

    Message.findOne({ shipmentid: shipmentid }).then(message => {
        if (message) {
            const messageError = 'Approval already sent'
            req.flash('messageError', messageError)
            return res.redirect('/admin')
        } else {
            Message.create({ shipmentid, requester, status, description, cost }, (error, sent) => {
                if (error) {
                    const messageError = ' message was not sent'
                    req.flash('messageError', messageError)
                    console.log(error)
                    return res.redirect('/admin')
                } else {
                    const messageError = ' Approval message sent'
                    req.flash('messageError', messageError)
                    return res.redirect('/admin')
                }
            })

        }
    })


}