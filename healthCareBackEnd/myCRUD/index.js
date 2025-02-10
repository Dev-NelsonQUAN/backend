const express = require("express");
const app = express();
const port = 5070;

app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  res.status(200).json(users);
});

//Create Users
app.post("/create-users", (req, res) => {
  const name = req.body.name;
  const stack = req.body.stack;
  const email = req.body.email;

  console.log(req.body);
  console.log(req.body.name);

  const verifyIfUserExists = users.findIndex((e) => e.stack === stack);
  // console.log(verifyIfUserExists);

  if (verifyIfUserExists === -1) {
    if (name && stack && email) {
      users.push({ id: users.length + 1, name, stack, email });
    } else if (!name && stack && email) {
      res.status(400).json({ message: "Kindly input your name" });
    } else if (name && !stack && email) {
      res.status(400).json({ message: "Stack is required" });
    } else if (name && stack && !email) {
      res.status(400).json({ message: "Email is required" });
    } else {
      res.status(400).json({ message: "All field is required" });
    }

    res.status(200).json({ message: "created successfully", users });
  } else {
    res.status(400).json({ message: "Stack exists already" });
  }
});

// console.log(id)
app.get("/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  // console.log(id)

  const requestUserInfo = users.findIndex((e) => e.id === id);
  if (requestUserInfo === -1) {
    res.status(404).json({ message: "User not found" });
  } else {
    res.status(200).json({
      message: "User gotten succesfully",
      data: users[requestUserInfo],
    });
  }
  console.log(requestUserInfo);
});

app.delete("/:id", (req, res) => {
  const findUser = users.filter((e) => e.id === parseInt(req.params.id));
  users = findUser;

  res.status(200).json({ message: "Deleted Successfully" });
});

app.patch("/:id", (req, res) => {
  const findUser = users.find((e) => e.id === parseInt(req.params.id));

  if (findUser) {
    const name = req.body.name;
    const stack = req.body.stack;
    const email = req.body.email;

    if (name) findUser.name = name;
    if (name) findUser.stack = stack;
    if (name) findUser.email = email;

    res.status(200).json({ message: "You succesffully updated your profile" });
  } else {
    res.status(400).json({ message: "Couldn't find user" });
  }
});

app.all("*", (req, res) => {
  res.status(400).json({ message: "No routes matches this" });
});

app.listen(port, () => {
  console.log(`Listening to http:localhost:${port}`);
});
