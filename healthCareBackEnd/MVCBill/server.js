const express = require("express");
const app = express();
require("dotenv/config");
const port = process.env.PORT;
const connectDb = require("./config/db");
const billRouter = require("./routes/billRoutes");

connectDb();

app.use(express.json());
app.use("/bills", billRouter);

app.listen(port, () => {
  console.log(
    Date.now(),
    new Date().toDateString(),
    `Listening to http://localhost:${port}`
  );
});

// const express = require("express");
// const connectTheDb = require("./config/db");
// const billRouter = require("./routes/billRoutes");
// const app = express();
// require("dotenv/config");
// const { PORT } = process.env;
// app.use(express.json())

// const port = PORT;
// connectTheDb();

// app.use("/bills", billRouter);

// app.listen(port, () => {
//   console.log(
//     Date.now(),
//     new Date().toDateString(),
//     `Listening to http://localhost:${port}`,
//     port
//   );
// });
