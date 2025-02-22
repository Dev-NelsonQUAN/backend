const taskManagerModel = require("../model/taskManagerModel");
const bcrypt = require("bcrypt");

// Handle errors
const handleError = async (res, error) => {
  return res
    .status(500)
    .json({ message: "An error occurred", error: error || error.message });
};

// Create User
const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    if (!password || !email) {
      return res.status(400).json({ message: "All fields required" });
    }

    const findIfUserExists = await taskManagerModel.findOne({ email });

    if (findIfUserExists) {
      return res.status(409).json({ message: "Email already exists" });
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

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const getTheUser = await taskManagerModel.find();

    return res
      .status(200)
      .json({ message: "All users gotten", data: getTheUser });
  } catch (err) {
    handleError(res, err);
  }
};

// Log user in
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

// Create Tasks
const createTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    console.log(req.body);

    const user = await taskManagerModel.findById(id);
    console.log(user);

    // Check if user exists
    if (!user) {
      return res
        .status(409)
        .json({ message: "User not found, and unable to create tasks" });
    }

    // Check if title and description are inputted for update
    if (!title && !description) {
      return res
        .status(409)
        .json({ message: "Title and description fields are required" });
    }

    // Create a new task
    const newTask = {
      title: title,
      description: description,
      completed: completed || false,
    };

    //Push task into array and updtae the task array
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

// Update Tasks
const updateTasks = async (req, res) => {
  try {
    const { id, taskId } = req.params;
    const { title, description, completed } = req.body;

    const findUser = await taskManagerModel.findById(id);

    if (!findUser) {
      return res
        .status(409)
        .json({ message: "User does not exist to update task" });
    }

    if (!title && !description) {
      return res
        .status(409)
        .json({ message: "Fields are required for updates" });
    }

    const updateTaskById = await findUser.task.id(taskId);
    if (!updateTaskById) {
      return res.status(409).json({ message: "No task to update" });
    }

    if (title) updateTaskById.title === title;
    if (description) updateTaskById.description === description;
    if (completed) updateTaskById.completed === completed;

    await findUser.save();

    return res
      .status(200)
      .json({ message: "Tasks updated successfully", data: findUser });
  } catch (err) {
    handleError(res, err.message);
  }
};

// Delete tasks
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
    handleError(res, err);
  }
};

module.exports = {
  register,
  getAllUsers,
  loginUser,
  createTasks,
  updateTasks,
  deleteTasks,
};
