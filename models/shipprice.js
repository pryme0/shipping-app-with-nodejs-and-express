const mongoose = require('mongoose')

const shipcostSchema = new mongoose.Schema({
    pricefortons: {
        type: String,
        required: [true, 'Price for Tons not specified']
    },
    priceforkg: {
        type: String,
        required: [true, 'Price for KG not specified']
    },
    date: {
        type: Date,
        default: Date.now(),
    }
})

const shipcost = mongoose.model('shipcost', shipcostSchema)
module.exports = shipcost