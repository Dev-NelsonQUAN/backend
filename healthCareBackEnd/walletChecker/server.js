const express = require("express");
const app = express();
require("dotenv/config");
const { PORT } = process.env;
const port = PORT;
const dataBase = require("./config/db");
const morgan = require("morgan");
const userRoute = require("./routes/userRoutes");
const walletRoute = require("./routes/walletRoute");

app.use(morgan("dev"));
dataBase();
app.use(express.json());

app.use("/user", userRoute);
app.use("/wallet", walletRoute);


app.listen(port, () => {
  console.log(
    new Date().toDateString(),
    `Listening to http://localhost${port}`,
    port
  );
});
