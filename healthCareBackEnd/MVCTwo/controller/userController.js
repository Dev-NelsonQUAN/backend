const userModel = require("../model/userModel");

const getAllUser = async (req, res) => {
  try {
    const getUser = await userModel.find();
    res.status(200).json({ message: "All user gotten", data: getUser });
  } catch (err) {
    res.status(500).json({ message: "An error occurrerd", err });
  }
};

module.exports = {getAllUser, }