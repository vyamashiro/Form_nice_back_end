import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import mongoose from 'mongoose';
import { resolvers } from './src/resolvers/resolvers.js';
import { typeDefs } from './src/typeDefs/typeDefs.js';

import * as dotenv from 'dotenv'
dotenv.config()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Databased failed: ", error));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: 4001 } });

console.log(`🚀 Server listening at: ${url}`);
