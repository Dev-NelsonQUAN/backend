const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    fs.readFile(path.join(__dirname, "/product.html"), (err, data) => {
      if (err) {
        res.end("This is error", err);
      } else {
        res.writeHead(200, "Success");
        res.end(data);
      }
    });
  } else if (req.method === "GET" && req.url === "/send") {
    fs.readFile(path.join(__dirname, "section.html"), (err, data) => {
      if (err) {
        res.writeHead(404, "Error");
        res.end("Error here", err);
      } else {
        res.writeHead(200, "Success");
        res.end(data);
      }
    });
  } else {
    res.end("Wrong server");
  }
});

const port = 4000;

server.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
