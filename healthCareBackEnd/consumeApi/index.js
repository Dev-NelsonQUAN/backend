const express = require("express");
const mongoose = require("mongoose");

const app = express();
require("dotenv/config");
const cors = require('cors')
const port = process.env.PORT5;

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ["GET", "POST"],
    credentials: true  
  })
);

mongoose
  .connect("mongodb://localhost:27017/apiDb")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err.message);
  });

const apiSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const apiModel = mongoose.model("users", apiSchema);

app.get("/get-all-user", async (req, res) => {
  try {
    const getAllUsers = await apiModel.find();
    res
      .status(200)
      .json({ message: "All user gotten successfully", getAllUsers });
  } catch (error) {
    res.status(500).json({ message: "Error getting all user", error });
  }
});

app.post("/sign-up", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const checkEmail = await apiModel.findOne({ email });

    if (checkEmail) {
      res.status(409).json({ message: "Email already exist" });
    }

    const createUser = await apiModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    if (!firstName && !lastName && !email && !password) {
      res.status(409).json({ message: "All field are required" });
    } else if (!firstName && lastName && email && password) {
      res.status(200).json({ message: "First Name is required" });
    } else if (firstName && !lastName && email && password) {
      res.status(200).json({ message: "Last Name is required" });
    } else if (firstName && lastName && !email && password) {
      res.status(200).json({ message: "Email is required" });
    } else if (firstName && lastName && email && !password) {
      res.status(200).json({ message: "Password is required" });
    }

    res.status(200).json({ message: "User created successfully", createUser });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const loginUser = await apiModel.findOne({ email });

    if (!loginUser) {
      res.status(409).json({ message: "No user found" });
    }

    res.status(200).json({
      message: "You have been loggedin Successfully",
      name: loginUser.name,
      _id: loginUser.id,
    });
  } catch (err) {
    res.status(200).json({ message: "You have been loggedin Successfully" });
  }
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
