const express = require("express");
const {
  getAllUser,
  getOneUser,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

const routes = express.Router();

routes.get("/users", getAllUser);
routes.get("/:id", getOneUser);
routes.post("/create-user", createUser);
routes.post("/login", loginUser);
routes.patch("/:id", updateUser);
routes.delete("/:id", deleteUser);

module.exports = () => routes;
