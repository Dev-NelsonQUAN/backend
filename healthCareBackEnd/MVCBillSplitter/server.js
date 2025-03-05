const express = require("express");
// require("config").dotenv()
require("dotenv/config");
const app = express();
const database = require("./config/db");
const router = require("./routes/billSplitterRoute");
const port = process.env.PORT;
database();
// const port = PORT;

app.use(express.json());
app.use('/api', router())
app.listen(port, () => {
  console.log(`Listening to http://localhost:${port} `);
});
