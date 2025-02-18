const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require('cors')
require("dotenv/config");
const port = process.env.PORT4;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5174",
  methods: ["GET", "POST"],
  credentials: true
}))

mongoose
  .connect("mongodb://localhost:27017/booksDB")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("Error connecting to Server", err);
  });

const booksSchema = new mongoose.Schema({
  title: String,
  author: String,
  publishedYear: Number,
  genre: String,
  available: Boolean,
});

const booksModel = mongoose.model("books", booksSchema);

app.get("/books", async (req, res) => {
  try {
    const getAllBooks = await booksModel.find();
    res
      .status(200)
      .json({ message: "All books gotten Successfully", data: getAllBooks });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const getOneBook = await booksModel.findById(req.params.id);
    if (!getOneBook) {
      res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book gotten", getOneBook });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
});

app.post("/books", async (req, res) => {
  try {
    const { title, author, publishedYear, genre, available } = req.body;
    const createBook = await booksModel.create({
      title,
      author,
      publishedYear,
      genre,
      available,
    });

    if (!title && !author && !publishedYear && !genre && !available) {
      res.status(409).json({ message: "All fields required" });
    }

    res.status(200).json({ message: "Book created successfully", createBook });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.patch("/books/:id", async (req, res) => {
  try {
    const { title, author, publishedYear, genre, available } = req.body;
    const updateOneBook = await booksModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        author,
        publishedYear,
        genre,
        available,
      },
      { new: true }
    );

    if (!updateOneBook) {
      res.status(409).json({ message: "Book not found for update" });
    }

    res
      .status(200)
      .json({ message: "Book Updated Successfully", updateOneBook });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const findABookAndDelete = await booksModel.findByIdAndDelete(
      req.params.id
    );

    if (!findABookAndDelete) {
      res.status(409).json({ message: "Book not found for deletion" });
    }

    res.status(200).json({ message: "Book deleted Successfully" });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.patch("/books/:id/toogle-availability", async (req, res) => {
  try {
    const { available } = req.body;
    const updateAvailabliity = await booksModel.findByIdAndUpdate(
      req.params.id,
      available,
      { new: true }
    );

    if (!updateAvailabliity) {
      res.status(409).json({ message: "Book not found" });
    }

    if (updateAvailabliity.available === true) {
      res.status(200).json({
        message: "Books Availability is successfully changed to true",
      });
    }
    if (updateAvailabliity.available === false) {
      res.status(409).json({
        message: "Books Availability is successfully changed to false",
      });
    }

    res.status(409).json({ message: " Status updated" });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
});

app.all("/books/delete-all", async (req, res) => {
  try {
    const deleteAll = await booksModel.deleteMany();
    res.status(409).json({ message: " All books deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.all("*", () => {
  res.status(404).json({ message: "No route matched" });
});

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
