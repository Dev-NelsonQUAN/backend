const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

const port = process.env.PORT2;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/myUSerDB")
  .then(() => {
    console.log("Working DB");
  })
  .catch((err) => {
    console.log("An error occurred", err.message);
  });

const userDBSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const userDBModel = mongoose.model("myUSers", userDBSchema);

app.get("/users", async (req, res) => {
  try {
    const getAllUsers = await userDBModel.find()
    res.status(200).json({ message: "All users gotten", getAllUsers });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.get("/get-one/:id", async (req, res) => {
  try {
    const getAUser = await userDBModel.findById(req.params.id);
    if (!getAUser) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User gotten", getAUser });
  } catch (err) {
    res.status(500).json({ message: "An error", err });
  }
});

app.post("/create-user", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const checkIfUserExists = await userDBModel.findOne({ email });

    if (checkIfUserExists) {
      res.status(409).json({ message: "User already exist" });
    }

    const createUser = await userDBModel.create({ name, email, password });
    res.status(201).json({ status: true, createUser });
  } catch (err) {
    res.status(500).json({ status: false, err: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkLogin = await userDBModel.findOne({ email });

    if (!checkLogin || checkLogin.password !== password) {
       res.status(401).json({ message: "invalid email or password" });
    }
    res.status(200).json({
      name: checkLogin.name,
      email: checkLogin.email,
      _id: checkLogin._id,
    });
  } catch (err) {
    res
      .status(500)
      .json({
        status: false,
        message: "An error occurred",
        err: err.message,
      });
  }
});

app.patch("/update-user/:id", async (req, res) => {
  try {
    const updateUser = await userDBModel.findByIdAndUpdate(
      req.params.id,
      { name, email, password },
      { new: true }
    );

    if (!updateUser) {
      res.status(409).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updates successfully" });
  } catch (err) {
    res.status(500).json({ message: "An error occured", err });
  }
});

app.delete("/delete-user/:id", async (req, res) => {
  try {
    const findUserToDelete = await userDBModel.findByIdAndDelete(
      req.params.body
    );

    if (!findUserToDelete) {
      res.status(500).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "An error occured", err });
  }
});

app.all("/delete-every", async (req, res) => {
  try {
    await userDBModel.deleteMany();

    res.status(404).json({
      status: true,
      message: "all user deleted",
    });
  } catch (err) {
    res.status(500).json({ status: false, error: error.message });
  }
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "No routes matched" });
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`, port);
});
