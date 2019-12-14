const net = require('net')

let client = new net.Socket()
client.connect(7777, "127.0.0.1")

client.on('data', (data) => {
    console.log("data: " + data)
    client.destroy()
})
client.on('close', () => {
    console.log('connection closed')
})