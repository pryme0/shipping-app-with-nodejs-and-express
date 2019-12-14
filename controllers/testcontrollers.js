const user = require('../models/Users')
const Staff = require('../models/staff')

const email = 'stunyman@gmail.com'

const doSomethingAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const use = user.find({})
            resolve(use)
        }, 3000)
    })
}
const doSomething = async() => {
    console.log(await doSomethingAsync())
}
doSomething()