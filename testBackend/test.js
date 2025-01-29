const http = require("http");

const server = http.createServer((req, res) => {
  // console.log("first")
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, "Success");
    res.end("Focus on me");
  }

  if (req.method === "GET" && req.url === "/exit") {
    res.writeHead(200, "Success");
    res.end("This is an Exit Page");
  } else {
    res.writeHead(404, "Not Found");
    res.end("Page not found");
  }
});

const port = 5000;

server.listen(port, () => {
  console.log("Working");
});




// // server.js
// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// // Set the port and file path
// const port = 3000;
// const filePath = path.join(__dirname, 'index.html');

// // Create the server
// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     // Serve the index.html file when the root URL is accessed
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         // If there is an error reading the file, send a 500 server error
//         res.statusCode = 500;
//         res.end('Error loading the page.');
//       } else {
//         // If successful, send the content of the HTML file
//         res.statusCode = 200;
//         res.setHeader('Content-Type', 'text/html');
//         res.end(data);
//       }
//     });
//   } else {
//     // Handle requests for other URLs
//     res.statusCode = 404;
//     res.end('Page not found');
//   }
// });

// // Start the server
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   // Handle success page request
//   if (req.method === 'GET' && req.url === '/') {
//     const successPagePath = path.join(__dirname, 'success.html');
    
//     // Serve success.html file
//     fs.readFile(successPagePath, 'utf8', (err, data) => {
//       if (err) {
//         res.writeHead(500, 'Internal Server Error');
//         res.end('Error loading the Success page');
//       } else {
//         res.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
//         res.end(data);  // Send success page content
//       }
//     });
//   }
  
//   // Handle exit page request
//   else if (req.method === 'GET' && req.url === '/exit') {
//     const exitPagePath = path.join(__dirname, 'exit.html');
    
//     // Serve exit.html file
//     fs.readFile(exitPagePath, 'utf8', (err, data) => {
//       if (err) {
//         res.writeHead(500, 'Internal Server Error');
//         res.end('Error loading the Exit page');
//       } else {
//         res.writeHead(200, 'OK', { 'Content-Type': 'text/html' });
//         res.end(data);  // Send exit page content
//       }
//     });
//   }
  
//   // Handle error page for undefined routes
//   else {
//     const errorPagePath = path.join(__dirname, 'error.html');
    
//     // Serve error.html file
//     fs.readFile(errorPagePath, 'utf8', (err, data) => {
//       if (err) {
//         res.writeHead(500, 'Internal Server Error');
//         res.end('Error loading the Error page');
//       } else {
//         res.writeHead(404, 'Not Found', { 'Content-Type': 'text/html' });
//         res.end(data);  // Send error page content
//       }
//     });
//   }
// });

// Set the port
// const port = 5000;

// // Start the server
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

