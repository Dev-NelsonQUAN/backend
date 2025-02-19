const taskManagerModel = require("../model/taskManagerModel");
const bcrypt = require("bcrypt");

const handleError = async (res, error) => {
  return res
    .status(500)
    .json({ message: "An error occurred", error: error || error.message });
};

const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    if (!password || !email) {
      return res.status(400).json({ message: "All fields required" });
    }

    const createUser = await taskManagerModel.create({
      userName,
      email,
      password: hashPassword,
      task: [],
    });

    return res
      .status(200)
      .json({ message: "User created successfully", data: createUser });
  } catch (err) {
    console.log(err);
    handleError(res, err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const getTheUser = await taskManagerModel.find();

    return res
      .status(200)
      .json({ message: "All users gotten", data: getTheUser });
  } catch (err) {}
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const logUserIn = await taskManagerModel.findOne({ email });

    if (!logUserIn) {
      return res.status(409).json({ message: "User not found" });
    }

    const checkPassword = await bcrypt.compare(password, logUserIn?.password);

    if (!checkPassword) {
      return res.status(404).json({ message: "Invalid email and password" });
    }

    return res
      .status(200)
      .json({ message: "Loggedin Successfully", logUserIn });
  } catch (err) {
    handleError(res, err);
  }
};

const createTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    console.log(req.body);

    const user = await taskManagerModel.findById(id);
    console.log(user);

    if (!user) {
      return res
        .status(409)
        .json({ message: "User not found, and unable to create tasks" });
    }

    // Create a new task
    const newTask = {
      title: title,
      description: description,
      completed: false,
    };

    console.log("Updated User Document:", user);

    //Push task into arraya and updtae the task array
    user.task.push(newTask);
    await user.save(); //Save the updated user document

    return res.status(200).json({
      message: "Task successfully created",
      tasks: user.task,
    });
  } catch (err) {
    console.log(err, "error");
    handleError(res, err);
  }
};

const updateTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const updateTheTask = await taskManagerModel.findByIdAndDelete(
      id,
      { title, description, completed },
      { new: true }
    );

    if (!updateTheTask) {
      return res.status(409).json({ message: "No task to delete" });
    }

    return res
      .status(200)
      .json({ message: "Tasks updated successfully", data: updateTheTask });
  } catch (err) {
    handleError(res, err);
    // return res.status(500).json({message: ""})
  }
};

const deleteTasks = async (req, res) => {
  try {
    const deleteTheTask = await taskManagerModel.findByIdAndDelete(
      req.params.id
    );

    if (!deleteTheTask) {
      return res.status(409).json({ message: "Can't find task to delete" });
    }

    return res.status(200).json({ message: "Task successfully deleted" });
  } catch (err) {
    handleError(res, err)
  }
};

module.exports = { register, getAllUsers, loginUser, createTasks, updateTasks, deleteTasks };
