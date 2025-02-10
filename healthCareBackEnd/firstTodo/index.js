const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

let todos = require("./data");

app.get("/", (req, res) => {
  res.status(200).json({ message: "Gotten all todos" });
});

app.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const status = req.body.status;
  const priority = req.body.priority;
  const dueDate = req.body.dueDate;

  const findIfTodoExists = todos.findIndex((e) => e.status === status);
  if (findIfTodoExists === -1) {
    if (title && description && status && priority && dueDate) {
      todos.push({
        id: todos.length + 1,
        title,
        description,
        status,
        priority,
        dueDate,
      });
      res.status(200).json({
        message: "Created a todo successfully",
        data: todos[findIfTodoExists],
      });
    } else {
      res.status(200).json({ message: "Please input all fields" });
    }
  } else {
    res.status(404).json({ message: "Todo exists already" });
  }
});

app.get("/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);

  const getOneTodo = todos.findIndex((e) => e.id === id);
  if (getOneTodo === -1) {
    res.status(404).json({ message: "No Todo found" });
  } else {
    res.status(200).json({ message: "Gotten your todo" });
  }
});

app.delete("/:id", (req, res) => {
  let { id } = req.params;

  const findTodo = todos.find((e) => e.id === parseInt(req.params.id));

  if (findTodo) {
    const getTodo = todos.filter((e) => e.id !== parseInt(id));
    todos = getTodo;
    res.status(200).json({ message: "Todo successfully deleted" });
  } else {
    res.status(400).json({ message: "No tasks to delete on that path" });
  }
});

app.patch("/:id", (req, res) => {
  const { title, description, status, priority } = req.body;
  const findTodoToUpdate = todos.find((e) => e.id === parseInt(req.params.id));

  if (findTodoToUpdate) {
    if (title) findTodoToUpdate.title = title;
    if (description) findTodoToUpdate.description = description;
    if (status) findTodoToUpdate.status = status;
    if (priority) findTodoToUpdate.priority = priority;
    res.status(200).json({
      message: "Todo successfully updated",
      data: req.body,
      data2: todos[findTodoToUpdate],
    });
  } else {
    res.status(404).json({ message: "Task does not exist" });
  }
});

app.get("/:status", (req, res) => {
  const filterStatus = todos.filter((e) => e.status === req.params.status);
  res.status(404).json({ message: "Your request is here", data: filterStatus });
});

app.get("/:dueDate", (req, res) => {
  const getDueDate = todos.filter((e) => e.dueDate === req.params.dueDate);
  res
    .status(200)
    .json({ message: "Gotten the due dates todos", data: getDueDate });
});

app.delete("/", (req, res) => {
  todos = [];
  res.status(200).json({ message: "Todos successfully deleted" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "No routes matches this" });
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
