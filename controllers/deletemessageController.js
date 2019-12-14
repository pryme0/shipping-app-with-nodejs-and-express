const ship = require('../models/message')
module.exports = async(req, res) => {
    const del = await ship.findById(req.params.id).deleteOne()
    if (del) {
        const deleteMessage = 'Message deleted sucessfully'
        req.flash('deleteMessage', deleteMessage)
        res.redirect(req.headers.referer)
    } else {
        deleteMessage = 'Message was not deleted'
        req.flash('deleteMessage', deleteMessage)
        res.redirect(req.headers.referer)
    }
}