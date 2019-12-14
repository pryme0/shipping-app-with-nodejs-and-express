const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'please provide a firstname']
    },
    lastname: {
        type: String,
        required: [true, 'please provide a lastname']
    },
    companyname: {
        type: String,
        required: [true, 'please provide a companyname']
    },
    goodtype: {
        type: String,
        required: [true, 'please provide a goods type']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'please provide an email']
    },
    phonenumber: {
        type: String,
        required: [true, 'please provide a phonenumber']
    },
    password: {
        type: String,
        required: [true, 'please provide an password']
    },
    shipnumber: {
        type: String,
        unique: true,
        required: [true, 'please provide a shipnumber']
    },
    date: {
        type: Date,
        default: Date.now
    },


})


UserSchema.pre('save', function(next) {
    const User = this

    bcrypt.hash(User.password, 10, function(error, encrypted) {
        User.password = encrypted
        next()
    })
})

const User = mongoose.model('User', UserSchema);
module.exports = User