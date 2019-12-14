const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    amount: {
        type: String,
        required: [true, 'Amount not specified']
    },
    quantity: {
        type: String,
        required: [true, 'Quantity not specified']
    },
    goods: {
        type: String,
        required: [true, 'Goods not specified']
    },
    paymentfor: {
        type: String,
        required: [true, 'Reason for payment not specified not specified']
    },
    paymentmethod: {
        type: String,
        required: [true, 'Payment method not specified']
    },
    shipmentid: {
        type: String,
        required: [true, 'ShipmentId not specified']
    },
    payee: {
        type: mongoose.Schema.Types.Object,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        default: 'unpaid',
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
})

const payment = mongoose.model('payment', paymentSchema)
module.exports = payment