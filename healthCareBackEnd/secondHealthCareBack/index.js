const express = require("express");
const app = express();
const port = 3040;

app.use(express.json())

const healthUsers = [];

app.get("/", (req, res) => {
  res.status(200).json({ message: "Gotten all patients" });
});

app.post("/", (req, res) => {
  const { name, gender, illness, time } = req.body;
  if (name && gender && illness && time) {
    healthUsers.push({
      id: healthUsers.length + 1,
      name,
      gender,
      illness,
      time,
    });
    res.status(200).json({ message: "You have successfully booked a section" });
  } else {
    res.status(400).json({ message: "Kindly input all fields" });
  }
});

app.get("/:id", (req, res) => {
  const gethealthUser = healthUsers.findIndex(
    (e) => e.id === parseInt(req.params.id)
  );

  if (gethealthUser === -1) {
    res.status(200).json({
      message: "Gotten a specific user",
      data: healthUsers[gethealthUser],
    });
  } else {
    res.status(400).json({ message: "No user with that index" });
  }
});

app.patch("/:id", (req, res) => {
  const findUser = healthUsers.find((e) => e.id === parseInt(req.params.id));

  if (findUser) {
    const { name, gender, illness, time } = req.body;
    if (name) findUser.name = name;
    if (gender) findUser.gender = gender;
    if (illness) findUser.illness = illness;
    if (time) findUser.time = time;
    res.status(200).json({ message: "Your profile is successfully updated" });
  } else {
    res.status(404).json({ message: "No info to update" });
  }
});

app.delete("/:id", (req, res) => {
  const findHealthuser = healthUsers.find(
    (e) => e.id === parseInt(req.params.id)
  );

  if (findHealthuser) {
    const filterHealthUser = healthUsers.filter(
      (e) => e.id !== parseInt(req.params.id)
    );
    healthUsers = filterHealthUser;
    res.status(200).json({ message: "Successfully deleted" });
  } else {
    res.status(200).json({ message: "No tasks to delete" });
  }
});

app.get("/:illness", (req, res) => {
  const getMalriaPatients = healthUsers.filter(
    (e) => e.illness === req.params.illness
  );
  res.status(200).json({
    message: "Gotten all malaria patients successfully",
    illness: getMalriaPatients,
  });
});

app("/:time", (req, res) => {
    const filterTimeWithPatients = healthUsers.filter((e) => e.time === req.params.time)

  res
    .status(200)
    .json({ message: "Gotten all times schedukes for patients here", data: filterTimeWithPatients });
});

app.delete('/', (req, res) => {
    healthUsers = []
    res.status(200).json({message: 'All users are deleted successfully', data: healthUsers})
})

app.all("*", (req, res) => {
  res.status(404).json({ message: "No routes matches this" });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
