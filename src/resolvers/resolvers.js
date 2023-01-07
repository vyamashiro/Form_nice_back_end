import { users } from '../data.js';

export const resolvers = {
  Query: {
    getUsers: () => users,
  },
};