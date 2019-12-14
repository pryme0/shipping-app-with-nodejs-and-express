const mongoose = require('mongoose')
const user = require('../models/Users')
mongoose.connect('mongodb://localhost:27017/ship', { useNewUrlParser: true })


module.exports = async(req, res) => {
    let users = await user.find({})
    res.send(users)

}