import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers } from './src/resolvers/resolvers.js';
import { typeDefs } from './src/typeDefs/typeDefs.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4001 } });

console.log(`🚀 Server listening at: ${url}`);
