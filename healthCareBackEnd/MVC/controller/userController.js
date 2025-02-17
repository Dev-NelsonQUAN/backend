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
    return res
      .status(500)
      .json({ message: "An error occured", error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const login = await userModel.findOne({ email });

    if (!login) {
      return res.status(401).json({ message: "User does not exist" });
    }

    return res.status(200).json({
      message: "Login Successful",
      name: login.name,
      password: login.password,
    });
  } catch (err) {
    return res.status(500).json({ message: "An error occurred", err });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);
    const update = await userModel.findByIdAndUpdate(
      id,
      { name, email, password:hashPassword },
      { new: true }
    );

    if (!update) {
      return res.status(404).json({ message: "User not found" });
    }

    return res
      .status(200)
      .json({ message: "User updated Successfully", update });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An error occurred", error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTheUser = await userModel.findByIdAndDelete(id);

    if (!deleteTheUser) {
      return res.status(409).json({ message: "No user found" });
    }

    return res.status(200).json({ message: "User deleted Successfully" });
  } catch (err) {
    return res.status(500).json({ message: "An error occurred", err });
  }
};

module.exports = {
  getAllUser,
  getOneUser,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
};
