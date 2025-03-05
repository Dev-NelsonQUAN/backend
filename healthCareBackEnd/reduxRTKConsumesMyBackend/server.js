const express = require("express");
const app = express();
require("dotenv/config");
const { PORT } = process.env;
const port = PORT;
const dataBase = require("./config/db");
const morgan = require("morgan");
const userRoute = require("./routes/userRoutes");
const profileRoute = require("./routes/profiileRoute");
const cors = require("cors");

app.use(morgan("dev"));
app.use(express.json());
app.use("/user", userRoute);
app.use("/profile", profileRoute);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

dataBase();

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(
    new Date().toDateString(),
    `Listening to http://localhost${port}`,
    port
  );
});
