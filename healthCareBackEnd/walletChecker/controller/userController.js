const userModel = require("../model/model");
const argon2 = require("argon2");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const findUser = await userModel.findOne({ email });
    if (findUser) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const hashPassword = await argon2.hash(password);

    const create = await userModel.create({
      name,
      email,
      password: hashPassword,
    });

    return res
      .status(201)
      .json({ message: "User created successfully", data: create });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An error occurred", error: err.message || err });
  }
};

exports.getById = async (req, res) => {
  try {
    const { userId } = req.params;

    const getOne = await userModel.findById(userId).populate('wallet');

    if (!getOne) {
      return res.status(404).json({ message: "User not found" });
    }

    return res
      .status(200)
      .json({ message: "User got successfully", data: getOne });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An error occurred", error: err.message || err });
  }
};
