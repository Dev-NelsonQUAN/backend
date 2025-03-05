const userModel = require("../model/userModel");

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await userModel.create({
      name,
      email,
    });

    return res
      .status(200)
      .json({ message: "Created successfully", data: user });
  } catch (err) {
    return res
      .status(200)
      .json({ message: "An error occurred", error: err.message });
  }
};

exports.getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.findById(id).populate("profile");

    return res
      .status(200)
      .json({ message: "Created successfully", data: user });
  } catch (err) {
    return res
      .status(200)
      .json({ message: "An error occurred", error: err.message });
  }
};
