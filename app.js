const express = require("express");
const connectDB = require("./config/db");
const { ApolloServer } = require("apollo-server-express");

const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");
const mongooseMethods = require("./data/db");
const app = express();
const PORT = 3000;
app.use(express.json());

let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ mongooseMethods }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}

startServer();
connectDB();

app.listen(PORT, () => {
  console.log(
    `Example app listening at http://localhost:${
      PORT + apolloServer.graphqlPath
    } `
  );
});
