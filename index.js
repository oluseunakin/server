const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end('welcome')
})

server.on('request', (req, res) => {
    res.writeHead(200).end('worked')
})

server.listen(9000, () => {
    console.log('Server started')
})