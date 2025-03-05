const express = require("express");
const { createProfile } = require("../controller/profileController");
const profileRoute = express.Router();

profileRoute.post("/", createProfile);

module.exports = profileRoute;
