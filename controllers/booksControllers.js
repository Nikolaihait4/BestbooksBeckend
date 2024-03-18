const { Book } = require("../models/book");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await Book.find({}, "-createdAt -updatedAt");
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  // const result = await Book.findOne({ _id: id });
  const result = await Book.findById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

const add = async (req, res) => {
  const result = await Book.create(req.body);
  res.status(201).json(result);
};

const updeteById = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "Book deleted" });
};

const updeteFav = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(result);
};

const updeteImg = async (req, res) => {
  const { id } = req.params;
  const result = await Book.findByIdAndUpdate(id, req.body, { new: true });
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
  updeteImg: ctrlWrapper(updeteImg),
  deleteById: ctrlWrapper(deleteById),
};
