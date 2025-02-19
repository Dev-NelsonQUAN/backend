const express = require("express");
require("dotenv/config");
const { PORT8 } = process.env;
const database = require("./config/db");
const routes = require("./routes/userRoutes")

const port = PORT8;

const app = express();
database();
app.use(express.json());

app.use("/api", routes());

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
