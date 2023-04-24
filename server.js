const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req)
    res.end('hello from server')
    
})

server.listen(process.env.PORT, () => {
    console.log('server is up at '+process.env.PORT)
})