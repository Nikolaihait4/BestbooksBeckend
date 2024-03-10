const fs = require("fs/promises");
const path = require("path");
// const { nanoid } = require("nanoid");
const { uuid } = require("uuidv4");
const booksPath = path.resolve("db", "booksBasa.json");

const listBooks = async () => {
  const booksList = await fs.readFile(booksPath);
  return JSON.parse(booksList);
};

const getBookById = async (bookId) => {
  const allBooks = await listBooks();
  const oneBook = allBooks.find((book) => book.id === bookId);
  return oneBook || null;
};

const removeBook = async (bookId) => {
  const allBooks = await listBooks();
  const findBook = allBooks.findIndex((book) => book.id === bookId);
  if (findBook === -1) {
    return null;
  }
  const [result] = allBooks.splice(findBook, 1);
  await fs.writeFile(booksPath, JSON.stringify(allBooks, null, 2));
  return result;
};

const addBook = async (body) => {
  const { title, author, year, imageUrl, rating } = body;
  const allBooks = await listBooks();
  const newBook = { id: uuid(), title, author, year, imageUrl, rating };
  allBooks.push(newBook);
  await fs.writeFile(booksPath, JSON.stringify(allBooks, null, 2));
  return newBook;
};

const updateBook = async (bookId, body) => {
  const allBooks = await listBooks();
  const findBook = allBooks.findIndex((book) => book.id === bookId);
  if (findBook === -1) {
    return null;
  }
  allBooks[findBook] = { id: bookId, ...body };
  await fs.writeFile(booksPath, JSON.stringify(allBooks, null, 2));
  return allBooks[findBook];
};

module.exports = {
  listBooks,
  getBookById,
  removeBook,
  addBook,
  updateBook,
};
