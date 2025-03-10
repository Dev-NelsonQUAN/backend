const walletModel = require("../model/walletModel");
const modelUser = require("../model/model");

exports.createWallet = async (req, res) => {
  try {
    const {owner, email, balance, currency } = req.body;
    const createWall = await modelUser.findOne({ email });

    if (!createWall) {
      return res.status(409).json({
        message:
          "You are unable to create a wallet, kindly sign up with us now.",
      });
    }

    const walletCreate = await walletModel.create({
      user: createWall?._id,
      owner,
      email,
      balance,
      currency,
    });
    walletCreate.save();
    createWall.wallet = walletCreate?._id;
  

    await createWall.save();

    return res
      .status(200)
      .json({ message: "Wallet created successfully", data: walletCreate });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An error occurred", error: err.message || err });
  }
};
