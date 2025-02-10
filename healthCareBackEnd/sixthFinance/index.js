const express = require("express");
const app = express();
const port = 6767;

app.use(express.json());

const financeUser = [];

app.get("/", (req, res) => {
  res.status(200).json({ message: "Gotten all users" });
});

app.post("/", (req, res) => {
  const { name, email, budget } = req.body;

  const createUserEmail = financeUser.findIndex((e) => e.email === email);

  if (createUserEmail !== -1) {
    if (name && email && budget) {
      financeUser.push({ id: financeUser.length + 1, name, email, budget });
      res.status(200).json({ message: "User created successfully" });
    } else {
      res.status(200).json({ message: "No user with this details" });
    }
  }
});

app.delete("/:id", (req, res) => {
  const findUserToDelete = financeUser.find(
    (e) => e.id === parseInt(req.params.id)
  );
  if (findUserToDelete) {
    const filterToDelete = financeUser.filter(
      (e) => e.id !== parseInt(req.params.id)
    );
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(200).json({ message: "No user to delete" });
  }
});

app.patch("/:id", (req, res) => {
  const { name, email, budget } = req.body;

  const findProfileToUpdate = financeUser.find(
    (e) => e.id === parseInt(req.params.id)
  );
  if (findProfileToUpdate) {
    if (name) findProfileToUpdate.name = name;
    if (email) findProfileToUpdate.email = email;
    if (budget) findProfileToUpdate.budget = budget;
    res.status(200).json({ message: "Updated Successfully" });
  } else {
    res.status(200).json({ message: "No user found" });
  }
});

app.get("/:id", (req, res) => {
  const filterId = financeUser.filter((e) => e.id === parseInt(req.params.id));
  if (filterId === -1) {
    res.status(200).json({ message: "No data to delete" });
  } else {
    res
      .status(200)
      .json({ message: "User gotten succewssfully", data: filterId });
  }
});

app.get("/:budget", (req, res) => {
  const getBudgets = financeUser.filter((e) => e.budget === req.params.budget);
  res.status(200).json({ message: "Gotten all budgets", data: getBudgets });
});

app.delete("/", (req, res) => {
  financeUser = [];
  res.status(200).json({ message: "Deleted all user on the mart" });
});

app.all("*", (req, res) => {
  res.status(200).json({ message: "Deleted all users" });
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
