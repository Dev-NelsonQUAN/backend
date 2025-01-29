const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    fs.readFile(path.join(__dirname, "info.html"), (err, data) => {
      if (err) {
        res.end("This is an Error", err);
      } else {
        res.end(data);
      }
    });
  } else if (req.method === "GET" && req.url === "/check") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) {
        res.end("Error loading the page", err);
      } else {
        res.end(data);
      }
    });
  } else if (req.method === "GET" && req.url === "/retrieve") {
    fs.readFile(path.join(__dirname, "retrieve.html"), (err, data) => {
      if (err) {
        res.end("This is an error", err);
      } else {
        res.end(data);
      }
    });
  } 
    else if (req.method === 'GET' && req.url === '/products') {
      fs.readFile(path.join(__dirname, "product.html"), (err, data) => {
        if(err) {
          res.end("Error loading product's page")

        } else {
          res.end(data)
        }
      })
    } else if (req.method === 'GET' && req.url === '/section' ) {
      fs.readFile(path.join(__dirname, '/section.html'), (err, data) => {
        if (err) {
          res.end('Section has error', err)
        } else {
          res.end(data)
        }
      })
    }
  else {
    res.end("Error 404: Not Found");
  }
});

const port = 3500;

server.listen(port, () => {
  console.log("Server listening to:", port);
});
