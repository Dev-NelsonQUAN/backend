const express = require("express");
const { createWallet } = require("../controller/walletController");
const walletRoute = express.Router();

walletRoute.post("/create-wallet", createWallet);
// walletRoute.patch("/:walletId", updateUserDetails)

module.exports = walletRoute;
