const express = require("express");
const app = express();
require("dotenv/config");
const { PORT } = process.env;
const port = PORT;
const dataBase = require("./config/db");
const morgan = require("morgan");
const userRoute = require("./routes/userRoutes");
const detailsRoute = require("./routes/detailsRoute");

app.use(morgan("dev"));
app.use(express.json());
app.use("/user", userRoute);
app.use("/details", detailsRoute);

dataBase();

app.listen(port, () => {
  console.log(
    new Date().toDateString(),
    `Listening to http://localhost${port}`,
    port
  );
});
