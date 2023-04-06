const { log } = require('console');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    log('request made')
})

server.listen(1337, 'localhost', () => {
    log('listening for requests on port 1337')
})