const { Router } = require("express");
const { createUser, getUser, getAll } = require("../controller/userController");
const userRoute = Router();

userRoute.post("/", createUser);
userRoute.get("/", getAll )
userRoute.get("/:userId", getUser);

module.exports = userRoute;
