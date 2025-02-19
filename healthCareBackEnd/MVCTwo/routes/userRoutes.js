const express = require("express");
const { getAllUser } = require("../controller/userController");

const routes = express.Router();

routes.get('/users', getAllUser)

module.exports = () => routes;
