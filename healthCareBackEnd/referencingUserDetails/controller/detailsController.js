const detailsModel = require("../model/detailsModel");
const userModel = require("../model/model");

const createUserDetails = async (req, res) => {
  try {
    const { userId, age, address } = req.body;

    const getUser = await userModel.findById(userId);

    if (!getUser) {
      return res
        .status(404)
        .json({ message: "You don't have account. Please Sign Up" });
    }

    const createDetails = new detailsModel({
      age,
      address,
      user: getUser._id,
    });

    createDetails.save();

    getUser.details = createDetails._id;
    await getUser.save();
    return res
      .status(201)
      .json({ message: "Profile created successfully", data: createDetails });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An error occurred", error: err.message || err });
  }
};

//Update details
const updateUserDetails = async (req, res) => {
  try {
    const { detailsId } = req.params;
    // const { age, address } = req.body;

    const updateUser = await detailsModel.findByIdAndUpdate(detailsId, req.body, {new: true});
    // const updateUser = await userModel.findByIdAndUpdate(detailsId);

    if (!updateUser) {
      return res.status(409).json({ message: "Details not found for update" });
    }

    // if (age) updateUser.age = age;
    // if (address) updateUser.address = address;

    // await updateUser.save();


    return res.status(200).json({ message: "Details updated Successfully" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An error occurred", error: err.message });
  }
};



module.exports = { createUserDetails, updateUserDetails };
