const Ship = require('../models/shipments')
const shipprice = require('../models/shipprice')
module.exports = async(req, res) => {
    const price = await shipprice.findById('5dbd4ac465264805a4968f85')
    const { goods, quantity, destination, description, shipfrom, unitofweight } = req.body
    let cost = 0
    if (req.body.unitofweight == 'kilogram') {
        cost = quantity * price.priceforkg
    } else if (req.body.unitofweight == 'tons') {
        cost = quantity * price.pricefortons
    }
    Ship.create({...req.body, requester: req.session.userId, cost }, (error, shipment) => {
        if (error) {
            const registrationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('registrationErrors', registrationErrors)
            return res.redirect('/dashboard')
        } else {
            registrationErrors = ' Request submitted sucessfully'
            req.flash('registrationErrors', registrationErrors)
            return res.redirect('/dashboard')
        }
    })

}