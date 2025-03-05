const express = require("express");
const { createUserDetails } = require("../controller/profileController");
const detailsRoute = express.Router();

detailsRoute.post("/", createUserDetails);

module.exports = profileRoute;
