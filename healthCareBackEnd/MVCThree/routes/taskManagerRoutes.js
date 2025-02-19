const { Router } = require("express");
const { register, getAllUsers, loginUser, createTasks, updateTasks, deleteTasks } = require("../controller/userController");

const router = Router();

router.post("/auth", register);
router.get('/get-all', getAllUsers)
router.post('/login', loginUser)
router.post('/create-tasks/:id', createTasks)
router.patch('/update-tasks/:id', updateTasks)
router.delete('/delete-task', deleteTasks)

module.exports = router;
