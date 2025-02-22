const express = require("express");
require("dotenv/config");
const app = express();
const { PORT } = process.env;
const port = PORT;
app.use(express.json())

const dataDB = require("./config/db");
const router = require("./routes/userBlogRouter");
dataDB();

app.use('/api/users', router)

app.listen(port, () => {
  console.log(
    new Date().toDateString(),
    `Listening to http://localhost:${port}`
  );
});
