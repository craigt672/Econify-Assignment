const { GraphQLServer } = require("graphql-yoga");

const typeDefs = `
type Query {
  welcome: String!
}
`;

const resolvers = {
  Query: {
    welcome: () => `Initial Query`
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
