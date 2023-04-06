const { log } = require('console');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    res.write(
        // can't use line breaks??? it always breaks the code
            '<h1>Home page Welcome to the home page! this is generally where youd find a lot more information for a landing page.  Lets pretend this is a shop for racing gear.</h1>'
        )
    res.end();
})

server.listen(1337, 'localhost', () => {
    log('listening for requests on port 1337')
})