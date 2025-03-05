const profileModel = require("../model/profileModel");
const userModel = require("../model/userModel");

exports.createProfile = async (req, res) => {
  try {
    const { email, age, address, phoneNo } = req.body;

    const checkUser = await userModel.findOne({ email });

    if (!checkUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const profile = await profileModel.create({
      age,  
      address,
      phoneNo,
      user: checkUser?._id,
    });

    await userModel.findByIdAndUpdate(
      checkUser._id,
      { profile: profile._id },
      { new: true }
    );

    await checkUser.save()

    return res.status(201).json({ message: "Profile Created", data: profile });
    // await checkUser.
  } catch (err) {
    return res
      .status(500)
      .json({ message: "A error occurred", error: err.message });
  }
};
