const express = require("express");
require("dotenv/config");
const database = require("./config/db");
const taskRouter = require('./routes/taskManagerRoutes')

const { PORT } = process.env;
const port = PORT;

const app = express();
database();
app.use(express.json())
app.use("/api", taskRouter)

app.listen(port, () => {
  console.log(`listening to http://localhost:${port}`)
});
