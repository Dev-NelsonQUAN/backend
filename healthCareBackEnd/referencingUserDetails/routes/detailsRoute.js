const express = require("express");
const createUserDetails  = require("../controller/detailsController");
const detailsRoute = express.Router();

detailsRoute.post("/", createUserDetails);

module.exports = detailsRoute;
