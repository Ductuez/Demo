const mongooseMethods = require("../data/db");

const Book = require("../models/Book");

const resolvers = {
  Query: {
    book: async (parent, args, { mongooseMethods }) => {
      await mongooseMethods.getBookById(args.id);
    },
    books: async (parent, args, { mongooseMethods }) =>
      await mongooseMethods.getAllBook(),
    authors: async (parent, args, { mongooseMethods }) =>
      await mongooseMethods.getAllAuthor(),
    author: (parent, args) => authors.find((author) => author.id == args.id),
  },
  Book: {
    author: (parent, args) => {
      return authors.find((elm) => elm.id == parent.id);
    },
  },
  Mutation: {
    createAuthor: async (parent, args, { mongooseMethods }) =>
      await mongooseMethods.createAuthor(args),
    createBook: async (parent, args, { mongooseMethods }) =>
      await mongooseMethods.createBook(args),
  },
};

module.exports = resolvers;
