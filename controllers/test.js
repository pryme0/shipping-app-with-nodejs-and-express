const eventEmitter = require('events')
const myEmitter = new eventEmitter()
    /*myEmitter.emit('test_event')
    myEmitter.on('test_event', () => {
        console.log('test event emitted')
    })
    myEmitter.emit('test_event')
   

setInterval(() => {
    console.log('event loops')
}, 5000)
setTimeout(func, 4 * 1000, 4) //function followed by the delay then followed by the arguement passsed to the function
setTimeout(func, 8 * 1000, 8) //a call to settimeout comes with a timer id which you can use to cancel the timeout call
clearTimeout(setTimeout(() => {
    console.log('this will not execute')
}, 2))

print hello world forever starting with a delay of 1 secounds
print hello world five times while incremnting the timer for 1 secound each time 



const interval = setInterval(() => {
    const func = () => {
        setTimeout(() => {
            console.log('hello')
        }, 1000)
        clearTimeout(func)
    }


}, 1000)
let arr = ['mark', 'brown', 'hello', [1, 2, 3], (name) => {
    console.log('hello ' + name)
}]
console.log(arr[4](arr[1]))
 

const jo = Math.floor(Math.random() * 2000) + 1
console.log(jo)

const tes = {
    name: 'joseph',
    state: 'benue'
}
console.log(tes.name)
*/
const fs = require('fs')
    //const path = require('path')

/*fs.writeFile('./README.md', '\nI am fine and you?', { flag: 'r+' }, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('data written sucessfully')
    }
}) 
fs.readFile(__filename, function cb(err, data) {
    console.log(data)
})
console.log('Test')
console.dir(global, { depth: 0 })
const { spawn } = require('child_process')
const { HOME } = process.env
const pwd = spawn('pwd')
pwd.stdout.pipe(process.stdout)

const cat = spawn('cat', [`${HOME}/.bash_profile`])
cat.stdout.pipe(process.stdout)

const ls = spawn('ls', ['-l', '.'])
ls.stdout.pipe(process.stdout)
show = () => {
    console.log('hello world.' + j)
}
j = 0

const counter = 0

setInterval(() => {
    setTimeout(show, 500, j += 1)
}, 1000)


let done = false

const check = new Promise(
    (resolve, reject) => {
        if (done) {
            const rep = console.log('deed is done')

        } else {
            const re = console.log('not done')

        }

    }
)


//promises

const isItDoneYet = new Promise(
    (resolve, reject) => {
        if (false) {
            const rep = console.log('deed is done')

        } else {
            const re = console.log('not done')

        }

    }
)

const chectDone = () => {
    isItDoneYet.then((ok) => {
        console.log(ok)
    }).catch((err) => {
        console.error(err)
    })

}
const response = 'hello'
const status = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    r
    return Promise.reject(new Error(response.statusText))
}
const json = (response) => response.json()


let fetch = ('/todos.json')
    .then(status)
    .then(json)
    .then((data) => { console.log('Request succeeded with JSON response', data) })
    .catch((error) => { console.log('Request failed', error) })
    //async await 
    const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'first')
})
const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'second')
})
Promise.race([first, second]).then((result) => {
    console.log(result) // second
})
const doSomethingAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve('I did something'), 10000)
    })
}
const doSomething = async() => {
    console.log(await doSomethingAsync())
}
doSomething()
const promiseToDoSomething = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('i did something'), 10000)
    })

}

const wachOverSomeOneDoingSomething = async() => {
    const something = await promiseToDoSomething()
    return something + ' and i watched'
}
const watchOverSomeoneWatchingSomeoneDoingSomething = async() => {
    const something = await wachOverSomeOneDoingSomething()
    return something + ' and i also watched'
}
watchOverSomeoneWatchingSomeoneDoingSomething().then((res) => {
    console.log(res)
    //examples on even emitters that didt work--throwing cant read value on of undefined
    const ventEmitter = require('events').EventEmitter()

ventEmitter.on('start', () => {
    console.log('started')
})
ventEmitter.emit('start')
})

//creating a simple server with nodejs
const http = require('http')
const port  =  7000

const server  =  http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('content-Type','text/plain')
    res.end('hello world')
})

server.listen(port,()=>{
    console.log(`server started on port ${port}`)
})
//http requests
const http = require('http')
const port = 7000

let server = http.createServer((req, res) => {
    res.writeHead(200, { "content-Type": "text/plain" })
    res.end('hello world\n')
})

server.listen(port, () => {
    console.log('server started')
})
const axios = require('axios')
const getBreeds = () => {
    try {
        return axios.get('/tryout')
    } catch (error) {
        console.error(error)
    }
}
const countBreeds = async() => {
    const breeds = getBreeds()
        .then(response => {
            if (response.data.message) {
                console.log(
                    `Got ${Object.entries(response.data.message).length} breeds`
                )
            }
        })
        .catch(error => {
            console.log(error)
        })
}
countBreeds()
    */
const app = require('express')();
const server = require('http').createServer(app);
const con = require('socket.io')(server)

con.on('connection', (req, res) => {
    console.log('socket connected')
    res.send('hello')

})

con.emit('connection')
con.listen(3000, () => {
    console.log('socket started')
})