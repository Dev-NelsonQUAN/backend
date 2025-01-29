const express = require('express')

const app = express()

const port = 5020

app.get('/', (req, res) => {
    res.status(200).json({message: "Hey Yo!!!"})
})

app.listen(port, () => {
    console.log("working", port)
})


// const http = require('http')

// const server = http.createServer((req, res) => {
//     if(req.method === 'GET' && req.url === '/') {
//         res.writeHead(200, 'Working')
//         res.end("Server is here")
//     } 

//     if(req.method === 'GET' && req.url === '/about') {
//         res.writeHead(200, 'Sharp')
//         res.end('Sharp About site')
//     }
// })

// const port = 4040

// server.listen(port, ()=>{
//     console.log(`Working on ${port}`)
// })


// const express = require("express");

// const app = express();

// const port = 3660;

// app.get('/', (req, res) => {
//     // res.status(200).send('Welcome to this local server')
//     res.status(200).json({message: 'Welcome back home'})
// })

// app.listen(port, () => {
//     console.log(`Working on port ${port}`)
// })