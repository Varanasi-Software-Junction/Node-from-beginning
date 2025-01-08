const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain',
      
    });
    res.end('Hello from the node server');
});

server.listen(777, () => {
    console.log('Server listening on port 777');
});