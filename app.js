const http = require('http');
const fs = require('fs');

const port = 3000

const renderHTML = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.write('Error: file not found');
        } else {
            res.write(data);
        }
        res.end();
    });
};

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html',
    });

    const url = req.url;

    switch (url) {
        case '/about':
            renderHTML('./about.html', res);
            break;
        case '/contact':
            renderHTML('./contact.html', res);
            break;
        default:
            renderHTML('./index.html', res);
            break;
    }
});

server.listen(3000, () => {
    console.log(`Server is listening on port ${port}...`)
});