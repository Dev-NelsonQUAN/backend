const express = require("express");
const app = express();

const port = 4050;

const users = []

app.get('/', (req, res) => {
    res.status(200).json(users)
})

app.listen(port, () => {
  console.log(`Listening to http//localhost${port}`);
});
