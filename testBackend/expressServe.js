const express = require("express");
const app = express();
const port = 4500;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hi Express" });
});

app.listen(port, () => {
  console.log(`Listening to Port:${port}`);
});
