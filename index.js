const http = require('http')

const server = http.createServer((req, res) => {
    console.log("in other")
    res.end('welcome')
})

server.on('request', (req, res) => {
    console.log("in request")
    //res.writeHead(200).end('worked')
})

server.listen(9000, () => {
    console.log('Server started')
})