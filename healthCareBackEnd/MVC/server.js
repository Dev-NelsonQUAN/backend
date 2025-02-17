const express = require("express");
require("dotenv/config");
const database = require('./config/db');
const routes = require("./routes/userRoutes");

const { PORT6 } = process.env;

const app = express();
database()
const port = PORT6;

app.use(express.json())
app.use('/api', routes )

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
