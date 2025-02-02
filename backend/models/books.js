const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  title: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
