const express = require("express");
const {createUserDetails, updateUserDetails}  = require("../controller/detailsController");
const detailsRoute = express.Router();

detailsRoute.post("/", createUserDetails);
detailsRoute.patch("/:detailsId", updateUserDetails)

module.exports = detailsRoute;
