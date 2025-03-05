const { Router } = require("express");
const { createUser, getOneUser, loginUser } = require("../controller/userController");
const userRoute = Router();

userRoute.post("/", createUser);
userRoute.post("/login", loginUser)
// userRoute.get("/:id", getOneUser);

module.exports = userRoute ;
