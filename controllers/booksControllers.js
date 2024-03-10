const books = require("../db/books");

const {HttpError} = require("../helpers/HttpError");

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

module.exports = {
  getAll,
  getById,
  add,
  updeteById,
  deleteById,
};
