const userModel = require("../model/model");

const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const checkUserExists = await userModel.findOne({ email });

    if (checkUserExists) {
      return res.status(404).json({ message: "Email already exists" });
    }

    const newUser = await userModel.create({
      name,
      email,
    });

    return res
      .status(201)
      .json({ message: "User created successfully", data: newUser });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An error occurred", error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const getTheUser = await userModel.findById(userId).populate("details");

    if (!getTheUser) {
      return res.status(409).json({ message: "User not found" });
    }

    return res
      .status(200)
      .json({ message: "User gotten successfully", data: getTheUser });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An error occurred", error: err || err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const find = await userModel.find().populate("details");

    return res.status(200).json({ message: "All user gotten successfully" , data: find});
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An error occurred", error: err.message || err });
  }
};

module.exports = { createUser, getUser, getAll };
