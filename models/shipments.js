mongoose = require('mongoose')
shipmentSchema = new mongoose.Schema({
    requester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    goods: {
        type: String,
        required: [true, 'please provide the goods name']
    },
    unitofweight: {
        type: String,
        required: [true, 'please provide the goods name']
    },
    shipfrom: {
        type: String,
        required: [true, 'please provide the ship from value']
    },
    Shipnumber: {
        type: String,
        default: 'ship0000',
        required: [true, 'please provide the ship number']
    },
    quantity: {
        type: String,
        required: [true, 'please provide the quantity']
    },
    shipmentstatus: {
        type: String,
        default: 'Not shipped',
        required: [true, 'please provide the shipment status']
    },
    expecteddelivery: {
        type: Date,
        default: new Date(),
        required: [true, 'please provide the quantity']
    },
    deliverystatus: {
        type: String,
        default: 'Not delivered',
        required: [true, 'please provide the quantity']
    },
    currentlocation: {
        type: String,
        default: 'still in store',
        required: [true, 'please provide current location']
    },
    cost: {
        type: String,
        required: [true, 'please provide the cost']
    },
    destination: {
        type: String,
        required: [true, 'please provide a destination']
    },
    description: {
        type: String,
        required: [true, 'please provide a description']
    },
    sentAt: {
        type: Date,
        default: new Date()
    }

})

const ship = mongoose.model('ship', shipmentSchema)
module.exports = ship