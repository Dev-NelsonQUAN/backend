const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 7620;

app.use(express.json);

mongoose
  .connect("mongodb://localhost:27017/libraryDB")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });

const bookSchema = new mongoose.Schema({
  title,
  yearPublished,
  author,
  category,
});

const bookModel = mongoose.model("book", bookSchema);

app.get("/", async (req, res) => {
  try {
    const findBook = await bookModel.find();
    res.status(200).json({ message: "Gotten all books" });
  } catch (err) {
    res.status(404).json({ message: "An error occurred", err });
  }
});

app.post("/", async (req, res) => {
  try {
    const { title, category, yearPublished, author } = req.body;
    const postBook = await bookModel.create({
      title,
      author,
      yearPublished,
      category,
    });
    res.status(200).json({ message: "All book gotten", data: postBook });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", err });
  }
});

app.get('/:id', async (req, res) => {
    try {
        const {id} = req.params
        const getOneBook = await bookModel.findOne(id)

        if(!getOneBook) {
            res.status(200).json({message


                
            })
        }
    }
    catch (err) {
        res.status(500).json({message: "An error occurred", err})
    }
})

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});
