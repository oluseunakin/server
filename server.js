const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req)
    res.end('hello from server')
    
})

server.listen(3000, () => {
    console.log('server is up')
})