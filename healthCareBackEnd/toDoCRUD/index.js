const express = require("express");
const app = express();
const port = 5420;

let todos = [];

app.use(express.json());

//Get all Todos
app.get("/", (req, res) => {
  res.status(200).json({ message: "Gotten all Todos", todos });
});

//Create a Todo
app.post("/", (req, res) => {
  const title = req.body.title;
  const data = req.body.data;
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;

  if (title && data && startDate && endDate) {
    todos.push({ id: todos.length + 1, title, data, startDate, endDate });
    res.status(200).json({
      message: "Created Successfully",
      todos: { title, data, startDate, endDate },
    });
  } else if (!title && data && startDate && endDate) {
    res.status(200).json({ message: "Title is required" });
  } else if (title && !data && startDate && endDate) {
    res.status(200).json({ message: "Data is required" });
  } else if (title && data && !startDate && endDate) {
    res.status(200).json({ message: "Start Date is required" });
  } else if (title && data && startDate && endDate) {
    res.status(200).json({ message: "End Date is required" });
  } else {
    res.status(200).json({ message: "Fill in all inputs" });
  }
});

//Get a specific Todo
app.get("/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);

  const getOneTodo = todos.findIndex((e) => e.id === id);

  if (getOneTodo === -1) {
    res.status(404).json({ message: "No todo on this path" });
  } else {
    res
      .status(200)
      .json({ message: "Gotten the specific todo", todos: todos[getOneTodo] });
  }
});

//Update a Todo
app.patch("/:id", (req, res) => {
  const getTodosIndex = todos.find((e) => e.id === parseInt(req.params.id));

  if (getTodosIndex) {
    const { title, data, startDate, endDate } = req.body;
    if (title) getTodosIndex.title = title;
    if (data) getTodosIndex.data = data;
    if (startDate) getTodosIndex.startDate = startDate;
    if (endDate) getTodosIndex.endDate = endDate;

    res.status(200).json({ message: "Todo sucessfully updated" });
  } else {
    res.status(200).json({ message: "Todo Not Found" });
  }
});

//Delete a Todo
app.delete("/:id", (req, res) => {
  const getOneTodo = todos.filter((e) => e.id === parseInt(req.params.id));
  todos = getOneTodo;
  res.status(200).json({ message: "Todo successfully deleted" });
});

app.delete("/", () => {
  res.status(200).json({ message: "All todos syccessfully deleted" });
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "No routes as this" });
});

app.listen(port, () => {
  console.log(`Listening to http://localhost${port}`);
});
