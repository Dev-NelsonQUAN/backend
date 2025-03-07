const userModel = require("../model/userModel");
const argon2 = require("argon2")

const handleError = async (res, err) => {
  res
    .status(404)
    .json({ message: "An error occurred", error: err.message || err });
};

exports.createUser = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    if (!userName && !email && !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const checkIfUserExists = await userModel.findOne({ email });

    if (checkIfUserExists) {
      return res.status(500).json({ message: "Email already exists" });
    }
    const hashPassword = await argon2.hash(password);

    const createUser = await userModel.create({
      userName,
      email,
      password: hashPassword,
    });

    return res
      .status(201)
      .json({ message: "Created successfully", data: createUser });
  } catch (err) {
    handleError(res, err.message);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find();

    return res
      .status(200)
      .json({ message: "Gotten all users successfully", data: allUsers });
  } catch (err) {
    handleError(res, err.message);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await userModel.findOne({ email });

    if (!checkUser) {
      return res.status(404).json({ message: "Invalid email or password" });
    }

    const handlePassword = await argon2.verify(checkUser.password, password);

    if (!handlePassword) {
      return res.status(404).json({ message: "Invalid email or password" });
    }

    // const
    return res
      .status(200)
      .json({
        message: "Login successful",
        data: checkUser.userName,
        email: checkUser.email,
        password: checkUser.password,
      });
  } catch (err) {
    handleError(res, err.message);
  }
};
