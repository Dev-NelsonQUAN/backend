const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 6039;

mongoose
  .connect("mongodb://localhost:27017//libraryDB")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("An error occurred", err);
  });

const SchemaBook = new mongoose.Schema({
  title: String,
  yearPublished: Number,
  author: String,
  category: String,
});

const bookModel = mongoose.model("book", SchemaBook);

app.get("/", async (req, res) => {
  try {
    const getAllBooks = await bookModel.find();
    res.status(200).json({ message: "All books gotten", data: getAllBooks });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.post("/", async (req, res) => {
  try {
    const createBook = await bookModel.create({
      title,
      yearPublished,
      author,
      category,
    });
    res.status(200).json({ message: "Book created Succedssfully" });
  } catch (err) {
    res.status(500).json({ message: "An Error Ocurred", err });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getOneBook = await bookModel.findOne(id);
    if (!getOneBook) {
      res.status(404).json({ message: "Book Not found" });
    }
    res
      .status(200)
      .json({ message: "Book gotten with Success", data: getOneBook });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, yearPublished, category } = req.body;

    const updateBook = await bookModel.findByIdAndUpdate(
      id,
      {
        title,
        author,
        yearPublished,
        category,
      },
      { new: true }
    );
    if (!updateBook) {
      res.status(404).json({ message: "No book found" });
    }
    res.status(200).json({ message: "Book Updated", data: updateBook });
  } catch (err) {
    res.status(500).json({ message: "An error Occurred", err });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getBookToDelete = await bookModel.findByIdAndDelete(id);
    if (!getBookToDelete) {
      res.status(404).json({ message: "No book to delete" });
    }
    res.status(200).json({ message: "Book Successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.get("/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const getBookByTitle = await bookModel.findOne(title);
    if (getBookByTitle) {
      res.status(404).json({ mesage: "No book with this title" });
    }
    res
      .status(200)
      .json({ message: "Book gotten successfully", getBookByTitle });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
