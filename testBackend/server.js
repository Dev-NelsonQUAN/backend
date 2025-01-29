const http = require("http");

const server = http.createServer((req, res) => {
//   console.log("Hello World");
//   res.end("Welcome to my server")
if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, 'Success')
    res.end('Home Page')
}

if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, 'Success')
    res.end('About Page')
} else {
    res.writeHead(404, "Error")
    res.end('Error Page')
}
});

const port = 4000;

server.listen(port, () => {
    console.log("Running server on the port", port)
})