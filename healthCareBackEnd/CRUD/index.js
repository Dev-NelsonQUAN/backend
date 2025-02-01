const express = require("express");
const app = express();
const port = 5000;

const users = [];

app.get("/", (req, res) => {
  res.status(200).json(users);
});

app.post("/create-users", () => {
  // const {status} = res
  // status(200)
  console.log();

  const { fullName, lastName, password, email } = req.body;
  const findUser = users.findIndex((e) => e.email === "email");
  console.log(findUser);

  if (findUser < -1) {
    if (fullName && lastName && password && email) {
      users.push(req.body);
      res.status(200).json({ message: "User created successfully" });
    } else {
      res.status(400).json({ message: "Please Enter Your Fullname" });
    }
    // console.log(" yes you can");
  } else {
    res.status(401).json({ message: "Cannot be created" });
    // console.log("No you cant");
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "Route Does Not exist" });
});

app.listen(port, () => {
  console.log("Listening to port:", port);
});
