const http = require('http')

const server = http.createServer(3000, (req, res) => {
    res.end('hello from server')
})

server.listen(3000, 'thisserver', () => {
    console.log('server is up')
})