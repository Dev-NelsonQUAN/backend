const express = require("express");

const app = express();

const port = 3550;

app.get("/", (req, res) => {
  // res.status(200).send('Welcome to my server')
  res.status(200).json({ message: "Welcome to my Server" });
});

app.listen(port, () => {
  console.log("Listening to port:", port);
});
