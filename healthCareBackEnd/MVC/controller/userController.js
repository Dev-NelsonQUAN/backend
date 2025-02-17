const userModel = require("../model/userModel");
const bcrypt = require("bcrypt");

const getAllUser = async (req, res) => {
  try {
    const allUser = await userModel.find();
    return res.status(201).json({ data: allUser });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An error occured", error: err.message });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const findOne = await userModel.findById(id);

    if (!findOne) {
      return res.status(409).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "User gotten", findOne });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An error occured", error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    const ifUserAlreadyExist = await userModel.findOne({ email });

    if (ifUserAlreadyExist) {
      return res.status(401).json({ message: "User already exist" });
    }

    const createTheUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });

    return res.status(200).json({ data: createTheUser });
  } catch (err) {
    return res.status(500).json({ message: "An error occured", error: err.message });
  }
};

module.exports = { getAllUser, getOneUser, createUser };
