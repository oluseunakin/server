const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.end('welcome')
})

server.listen(9000, () => {
    console.log('Server started')
})