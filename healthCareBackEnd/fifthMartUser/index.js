const express = require("express");
const app = express();
const port = 5667;

app.use(express.json());

const martUser = [];

app.get("/", (req, res) => {
  res.status(200).json({ message: "Gotten all user in the mart" });
});

app.post("/", (req, res) => {
  const { name, email, catergory, budget } = req.body;

  const findAUser = martUser.findIndex((e) => e.email === email);

  if (findAUser === -1) {
    if (name && email && catergory && budget) {
      martUser.push({ id: martUser + 1, name, email, catergory, budget });
      res.status(200).json({ message: "User onboarded successfully" });
    } else {
      res.status(200).json({ message: "Pls input all fields" });
    }
  } else {
    res.status(200).json({ message: "User witrh this email exist already" });
  }
});

app.patch("/:id", (req, res) => {
  const { name, email, catergory, budget } = req.body;

  const findUserForUpdate = martUser.find(
    (e) => e.id === parseInt(req.params.id)
  );

  if (findUserForUpdate) {
    if (name) findUserForUpdate.name = name;
    if (email) findUserForUpdate.email = email;
    if (catergory) findUserForUpdate.catergory = catergory;
    if (budget) findUserForUpdate.budget = budget;
    res.status(200).json({ message: "User profile updated sucessfully" });
  } else {
    res.status(200).json({ message: "No user here" });
  }
});

app.delete("/:id", (req, res) => {
  const findUser = martUser.find((e) => e.id === parseInt(req.params.id));

  if (findUser) {
    const filterUSer = martUser.findIndex(
      (e) => e.id !== parseInt(req.params.id)
    );
    martUser = filterUSer;
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(200).json({ message: "No user to delete" });
  }
});

app.get("/:id", (req, res) => {
  const getUser = martUser.findIndex((e) => e.id === parseInt(req.params.id));
  if (getUser === -1) {
    res.status(200).json({ message: "Couldn't get any user" });
  } else {
    res.status(200).json({ message: "Gotten a user", data: getUser });
  }
});

app.get("/:category", (req, res) => {
  const filterGet = martUser.filter((e) => e.category === category);
  res
    .status(200)
    .json({ message: "Category gotten successfully", data: filterGet });
});

app.all("*", (req, res) => {
  res.status(200).json({ message: "No routes matches this" });
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
