const { Router } = require("express");
const { createUser, getUser } = require("../controller/userController");
const userRoute = Router();

userRoute.post("/", createUser);
userRoute.get("/:userId", getUser);

module.exports = userRoute;
