const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID
    name: String
    special: Boolean
    genre: String
    author: Author
  }
  type Author {
    id: ID!
    name: String
    gender: String
  }

  #ROOT TYPE
  type Query {
    books: [Book]
    book(id: ID!): Book
    authors: [Author]
    author(id: ID!, gender: String): Author
  }
  type Mutation {
    createAuthor(id: ID!, name: String!, gender: String!): Author
    createBook(id: ID!, name: String!, genre: String!): Book
  }
`;

module.exports = typeDefs;
