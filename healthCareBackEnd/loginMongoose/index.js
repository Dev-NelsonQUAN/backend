const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv/config");
const port = process.env.PORT3;

mongoose
  .connect("mongodb://localhost:27017/aWholeDB")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("An error occurred", err);
  });

const logUser = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const logUserModel = mongoose.model("loggedUsers", logUser);

app.get("/get-all", async (req, res) => {
  try {
    const getAllLogUsers = await logUserModel.find();
    res.status(200).json({ message: "Gotten all users", getAllLogUsers });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.post("/create-user", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const checkEmailExistence = await logUserModel.findOne({ email });

    if (checkEmailExistence) {
      res.status(409).json({ message: "Email exists" });
    }

    if (!name && !email && password) {
      res.status(409).json({ message: "All fields are required" });
    }

    const createUser = await logUserModel.create({
      name,
      email,
      password,
    });

    res.status(200).json({ message: "Created Successfully", createUser });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err: err.message });
  }
});

app.get("/get-one/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getOneUser = await logUserModel.findOne(id);

    if (!findOne) {
      res.status(409).json({ message: "No user found" });
    }
    res.status(200).json({ message: "User successfully gotten", getOneUser });
  } catch (err) {
    res.status(500).json({ message: "An error occurred" });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginUser = await logUserModel.findOne({ email });

    if (!loginUser || loginUser.password !== password) {
      res.status(401).json({ message: "Wrong Email or password" });
    }
    res.status(500).json({
      message: "Loggedin Successful",
      name: loginUser.name,
      _id: loginUser.id,
    });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.patch("/update/:id", async (req, res) => {
  try {
    // const { name, email, password } = req.body;
    const updateUser = await logUserModel.findByIdAndDelete(
      req.params.id,
      {
        name,
        email,
        password,
      },
      { new: true }
    );

    if (!updateUser) {
      res.status(409).json({ message: "Can't find user" });
    }
    res.status(200).json({ message: "Updated successfully", updateUser });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.all("/delete-all", async (req, res) => {
  try {
    const deleteAll = await logUserModel.deleteMany();
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.all("*", (req, res) => {
  res
    .status(404)
    .json({
      message:
        "You must be lost and out of your sense, Infact how did you get here?",
    });
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
