const express = require("express");
const app = express();
const port = 6030;

app.use(express.json());

const shoeLovers = [];

app.get("/", (req, res) => {
  res.status(200).json({ message: "Gotten all shoe lovers" });
});

app.post("/", (req, res) => {
  const { name, shoeType, colour, size, deliverryTime } = req.body;

  const checkIfShoeLoversExist = shoeLovers.findIndex((e) => e.id === id);

  if (checkIfShoeLoversExist === -1) {
    if (name && shoeType && colour && size && deliverryTime) {
      shoeLovers.push({
        id: shoeLovers.length + 1,
        name,
        shoeType,
        colour,
        size,
        deliverryTime,
      });

      res.status(200).json({
        message: "Created your account successfully",
        data: shoeLovers[checkIfShoeLoversExist],
        data2: req.body,
      });
    } else {
      res.status(400).json({ message: "Please input all inputs" });
    }
  } else {
    res.status(200).json({ message: "Delivery Time occupied already" });
  }
});

app.get("/:id", (req, res) => {
  let { id } = req.params;

  const findOneShoeLover = shoeLovers.findIndex((e) => e.id === parseInt(id));
  if (findOneShoeLover === -1) {
    res.status(400).json({ message: "User not found" });
  } else {
    res.status(200).json({
      message: "User gotten successfully",
      data: shoeLovers[findOneShoeLover],
    });
  }
});

app.patch("/:id", (req, res) => {
  const findAUser = shoeLovers.find((e) => e.id === parent(req.params.id));

  if (findAUser) {
    const { name, shoeType, colour, size } = req.body;
    if (name) findAUser.name = name;
    if (shoeType) findAUser.shoeType = shoeType;
    if (colour) findAUser.shoeType = shoeType;
    if (size) findAUser.size = size;
    res.status(200).json({
      message: "You successfully updated your profile",
      data: req.body,
    });
  } else {
    res.status(200).json({
      message: "No data to update, since you didn't create an account",
    });
  }
});

app.delete("/:id", (req, res) => {
  const findAShoeLover = shoeLovers.find(
    (e) => e.id === parseInt(req.params.id)
  );

  if (findAShoeLover) {
    const filterToDeleteAUser = shoeLovers.filter(
      (e) => e.id !== parseInt(req.params.id)
    );

    shoeLovers = filterToDeleteAUser;
    res.status(200).json({ message: "User deleted successfully" });
  } else {
    res.status(400).json({ message: "Successfully deleted this user" });
  }
});

app.get("/:colour", (req, res) => {
  const getColour = shoeLovers.filter((e) => e.colour === colour);
  res.status(200).json({ message: "Gotten all colours", data: getColour });
});

app.get("/:size", (req, res) => {
  const getSizes = shoeLovers.filter((e) => e.size === size);
  res.status(200).json({ message: "Gotten sizes" });
});

app.all("*", (req, res) => {
  res.status(400).json({ message: "Route doesn't exist" });
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
