const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const staffSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'please provide a firstname']
    },
    lastname: {
        type: String,
        required: [true, 'please provide a lastname']
    },
    employeenumber: {
        type: String,
        required: [true, 'please provide an employeenumber']
    },

    email: {
        type: String,
        unique: true,
        required: [true, 'please provide an email']
    },
    department: {
        type: String,
        unique: true,
        required: [true, 'please provide a department']
    },
    phonenumber: {
        type: String,
        required: [true, 'please provide a phonenumber']
    },
    password: {
        type: String,
        required: [true, 'please provide a password']
    }
})


staffSchema.pre('save', function(next) {
    const staff = this

    bcrypt.hash(staff.password, 10, function(error, encrypted) {
        staff.password = encrypted
        next()
    })
})

const staff = mongoose.model('staff', staffSchema);
module.exports = staff