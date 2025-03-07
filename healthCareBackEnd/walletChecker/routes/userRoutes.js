const { Router } = require("express");
const { createUser, getById } = require("../controller/userController");
const userRoute = Router();

userRoute.post("/", createUser);
// userRoute.get("/", getAll )
userRoute.get("/:userId", getById);

module.exports = userRoute;
