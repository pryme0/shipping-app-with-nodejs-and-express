const mongoose = require('mongoose')

messageSchema = new mongoose.Schema({
    requester: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: true
    },

    status: {
        type: String,
        required: true
    },
    shipmentid: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }

})
const message = mongoose.model('message', messageSchema)
module.exports = message