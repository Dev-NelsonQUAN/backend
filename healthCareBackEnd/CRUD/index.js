const express = require("express");

const app = express();
const port = 2020;
app.use(express.json());

let users = [];

app.get("/", (req, res) => {
  res.status(200).json(users);
});

// create a user
app.post("/", (req, res) => {
  const { firstName, lastName, password, email } = req.body;

  const checkIfUserExist = users.findIndex((e) => e.email === email);
  if (checkIfUserExist === -1) {
    if (firstName && lastName && password && email) {
      users.push({
        id: users.length + 1,
        firstName,
        lastName,
        email,
        password,
      });
      res.status(200).json({
        message: "User created successfully",
        user: { firstName, lastName, email, password },
      });
    } else {
      res.status(400).json({ message: "All field are required" });
    }
  } else {
    res.status(409).json({ message: "Email already exist" });
  }
});

// get one user
app.get("/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);

  const getUser = users.findIndex((e) => e.id === id);
  if (getUser === -1) {
    res.status(404).json({ message: "User not found" });
  } else {
    res
      .status(200)
      .json({ message: "User gotten successfully", data: users[getUser] });
  }
});

// delete a user
app.delete("/:id", (req, res) => {
  const getUser = users.filter((e) => e.id !== parseInt(req.params.id));

  users = getUser;

  res.status(404).json({ messgae: "user deleted successfully" });
});

// update
app.patch("/:id", (req, res) => {
  const getUser = users.find((e) => e.id === parseInt(req.params.id));

  if (getUser) {
    const { firstName, email, lastName, password } = req.body;
    if (firstName) getUser.firstName = firstName;
    if (email) getUser.email = email;
    if (lastName) getUser.lastName = lastName;
    if (password) getUser.password = password;

    res.status(201).json({ message: "user updated successfully" });
  } else {
    res.status(404).json({ message: "user not found" });
  }
});

// Not Found
app.all("*", (req, res) => {
  res.status(404).json({ message: "Route Does Not exist" });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})

// CRUD
// POST method
// GET method
// PATCH method
// PUT method
// DELETE method



// const express = require("express");
// const app = express();
// const port = 5000;

// app.use(express.json())

// const users = [];

// app.get("/", (req, res) => {
//   res.status(200).json(users);
// });

// app.post("/create-users", () => {
//   // const {status} = res
//   // status(200)
//   console.log();

//   const { fullName, lastName, password, email } = req.body;
//   const findUser = users.findIndex((e) => e.email === "email");
//   console.log(findUser);

//   if (findUser < -1) {
//     if (fullName && lastName && password && email) {
//       users.push(req.body);
//       res.status(200).json({ message: "User created successfully" });
//     } else {
//       res.status(400).json({ message: "Please Enter Your Fullname" });
//     }
//     // console.log(" yes you can");
//   } else {
//     res.status(401).json({ message: "Cannot be created" });
//     // console.log("No you cant");
//   }
// });

// app.all("*", (req, res) => {
//   res.status(404).json({ message: "Route Does Not exist" });
// });

// app.listen(port, () => {
//   console.log("Listening to port:", port);
// });
