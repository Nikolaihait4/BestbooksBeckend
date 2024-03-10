const books = require("../db/books");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await books.listBooks();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { booksId } = req.params;
  const result = await books.getBookById(booksId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

const add = async (req, res) => {
  const result = await books.addBook(req.body);
  res.status(201).json(result);
};

const updeteById = async (req, res) => {
  const { bookId } = req.params;
  const result = await books.updateBook(bookId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

const deleteById = async (req, res) => {
  const { bookId } = req.params;
  const result = await books.removeBook(bookId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "Book deleted" });
};

const updeteFav = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;
  const result = await books.findByIdAndUpdate(
    id,
    { favorite: JSON.parse(favorite) },
    { new: true }
  );
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updeteById: ctrlWrapper(updeteById),
  updeteFav: ctrlWrapper(updeteFav),
  deleteById: ctrlWrapper(deleteById),
};
