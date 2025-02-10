const express = require("express");
const app = express();
const port = 6756;

// let jewelryUser = require('./data')

app.get("/", (req, res) => {
  res.status(200).json({ message: "Gotten all users" });
});

app.post("/", (req, res) => {
  const { name, email, grade:[] } = req.body;
  const getEmail = jewelryUser.findIndex((e) => e.email === email);

  if(getEmail === -1) {
    res.status(200).json({messsage: 'No one found'})
  } else {
    jewelryUser.push({
      name, email, grade
    })
  }

  res.status(200).json({ message: "You have successfully created an account" });
});

app.listen(port, () => {
  console.log("http://localhost:${port");
});
