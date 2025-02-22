const express = require("express");
const {
  registerUser,
  loginUser,
  getAllBlogsForAUser,
  createBlogForASpecificUser,
  updateAUserTasks,
  deleteAUserTask,
  deleteABlogUser,
  getABlogUser,
  deleteAllUser,
  handleWrongRoute,
} = require("../controller/userBlogController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:userId/blogs", getAllBlogsForAUser);
router.post("/:userId/blogs", createBlogForASpecificUser);
router.patch("/:userId/blogs/:blogId", updateAUserTasks);
router.delete("/:userId/blogs/:blogId", deleteAUserTask);
router.delete("/:id", deleteABlogUser);
router.get("/:id", getABlogUser);
router.all("/delete-all", deleteAllUser);
router.all("*", handleWrongRoute);

module.exports = router;
