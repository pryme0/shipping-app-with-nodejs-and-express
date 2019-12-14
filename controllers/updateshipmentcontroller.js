const ship = require('../models/shipments')
module.exports = async(req, res) => {
    const shipmentId = req.params.id
    const Ship = await ship.findById(shipmentId)

    const { expecteddelivery, shipmentstatus, currentlocation, goods, quantity, shipnumber } = req.body
    Ship.updateOne(req.body, (error, update) => {
        if (error) {
            const updateError = ' Information Update Failed'
            req.flash('updateError', updateError)
            res.redirect('/admin')
        } else {
            const updateError = ' Information update sucessful'
            req.flash('updateError', updateError)
            res.redirect('/admin')

        }
    })

}