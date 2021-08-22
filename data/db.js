const Author = require("../models/Author");
const Book = require("../models/Book");

const { modelName } = require("../models/Author");

const mongooseMethods = {
  // Query
  getAllAuthor: async () => await Author.find(),
  getAllBook: async () => await Book.find(),

  // Mutation

  createBook: async (args) => {
    const NewBook = new Book(args);
    return await NewBook.save();
  },
  createAuthor: async (args) => {
    const NewAuthor = new Author(args);
    return await NewAuthor.save();
  },
};

module.exports = mongooseMethods;
