const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5040;

mongoose
  .connect("mongodb://localhost:27017/libraryDB")
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
  //   const getBooks = bookModel
  //     .find()
  //     .then((data) => {
  //       res
  //         .status(200)
  //         .json({ message: "All books gotten successfully", book: data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  try {
    const getAllBooks = await bookModel.find();
    res.status(200).json({ message: "Gotten all books", data: getAllBooks });
  } catch (err) {
    res.status(500).json({ message: "Errorr", err });
  }
});

app.post("/", async (req, res) => {
  try {
    const { title, yearPublished, author, category } = req.body;

    const postedBooks = await bookModel.create({
      title,
      author,
      category,
      yearPublished,
    });
    res.status(201).json({ message: "All books gotten" });
  } catch (err) {
    res.status(500).json({ message: "An error occurred" });
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getOneBook = await bookModel.findById(id);
    res
      .status(200)
      .status({ message: "Successfully gotten a book", data: getOneBook });
  } catch (err) {
    res.status(200).json({ message: "An error occurred", err });
  }
});

app.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateBooksDetails = await bookModel.findByIdAndUpdate(
      id,
      {
        title,
        author,
        category,
        yearPublished,
      },
      { new: true }
    );

    if (!updateBooksDetails) {
      res.status(404).json({ message: "Book doesn't exist" });
    }

    res
      .status(200)
      .json({ message: "Book Gotten successfully", data: updateBooksDetails });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteOne = await bookModel.findOneAndDelete(id);
    if (!deleteOne) {
      res.status(404).json({ message: "This book does not exist" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.get("/:title", async (req, res) => {
  try {
    const { title } = req.params;
    const getByTitle = await bookModel.findOne(title);

    if (!getByTitle) {
      res.status(200).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book gotten by title", data: getByTitle });
  } catch (err) {
    res.status(200).json({ message: "An error occurred", err });
  }
});

const date = new Date();

app.listen(port, () => {
  console.log(
    `Listening to http://localhost:${port}`,
    date.toDateString(),
    port
  );
});
