import User from "../models/User.js";

export const resolvers = {
  Query: {
    async getUsers() {
      const users = await User.find({});
      return users
    },
  },
  Mutation: {
    async createUser(_, { user }) {
      
      const createdUser = new User({
        name: user.name,
        surname: user.surname,
      });

      await createdUser.save();

      return {
        ok: true
      };
    },
  }
};