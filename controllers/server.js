const net = require('net')
const users = require('../models/Users')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ship', { useNewUrlParser: true })

let server = net.createServer(async(socket) => {
    console.log("connection from :" + socket.remoteAddress)
    const use = await users.find({})
        //console.log(use)
    let information = [{
        firstname: "",
        lastname: "",
        comapyname: "",
        goodtype: "",
        email: "",
        phonenumber: "",

    }]
    use.forEach(us => {
        information.firstname = us.firstname
        information.lasstname = us.lastname
        information.companyname = us.companyname
        information.goodtype = us.goodtype
        information.email = us.email
        information.phonenumber = us.phonenumber
        console.log(information.phonenumber)

    })
    information.forEach(info => {
        console.log(info.firstname)
    })


    socket.end('hello world')
})

server.listen(7777, "127.0.0.1")