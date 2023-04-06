const { log } = require('console');
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    log(req.url, req.method);

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './';
    switch (req.url) {
        case '/':
            path += 'index.html'
            break;
        case '/about':
            path += 'about.html'
            break;
        case '/contact-me':
            path += 'contact-me.html'
            break;
        default:
            path += '404.html'
            break;
    }

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            log(err);
            res.end();
        } else {
            res.end(data);
        }
    })
})

server.listen(1337, 'localhost', () => {
    log('listening for requests on port 1337')
})