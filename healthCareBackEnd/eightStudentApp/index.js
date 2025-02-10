const express = require("express");
const app = express();
const port = 7656;

app.use(express.json());

const students = [];

app.get("/", (req, res) => {
  res.status(200).json({ message: "Gotten all user" });
});

app.post("/", (req, res) => {
  const { name, age, position } = req.body;

  const findIfStudent = students.findIndex((e) => e.position === position);
  if (findIfStudent === -1) {
    if (name && age && position) {
      students.push({ id: students.length + 1, name, age, position });
      res.status(200).json({ message: "Created wth success" });
    } else {
      res.status(200).json({ message: "Fill in all inputs" });
    }
  } else {
    res.status(200).json({ message: "User already exist" });
  }
});

app.get("/:id", (req, res) => {
  const findOneStudents = students.findIndex(
    (e) => e.id === parseInt(req.params.id)
  );

  if (findOneStudents === -1) {
    res.status(200).json({ message: "No user found" });
  }
  res.status(200).json({ message: "Gotten one user", data: findOneStudents });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
