const Price = require('../models/shipprice')
module.exports = async(req, res) => {
    const cost = await Price.findById('5dbd4ac465264805a4968f85')
    const { pricefortons, priceforkg } = req.body
    cost.updateOne(req.body, (error, update) => {
        if (error) {
            const updateError = ' Information Update Failed'
            req.flash('updateError', updateError)
            res.redirect('/account')
        } else {
            const updateError = ' Information Updated'
            req.flash('updateError', updateError)
            res.redirect('/account')
        }

    })



}