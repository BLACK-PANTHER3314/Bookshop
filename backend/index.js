const express = require("express");
const app = express();
const Book = require("./models/books");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");

app.use(cors());

app.use(express.json());

const mongoose = require("mongoose");

const mongodbURL = process.env.MONGODBURL;

const usersRoute = require("./routes/usersRoute");

main()
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongodbURL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });
}

const port = process.env.PORT || 4000;

app.get("/", async (req, res) => {
  try {
    let books = await Book.find();
    res.status(200).json(books);
  } catch {
    (err) => {
      console.log("error", err);
      res.status(500).json(err);
    };
  }
});

app.post("/", async (req, res) => {
  try {
    let book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch {
    (err) => {
      console.log("error", err);
      res.status(500).json(err);
    };
  }
});

app.use("/user", usersRoute);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
