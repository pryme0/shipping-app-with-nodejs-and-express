const ship = require('../models/shipments')
module.exports = async(req, res) => {
    const del = await ship.findById(req.params.id).deleteOne()
    res.redirect('req.headers.referer')

}