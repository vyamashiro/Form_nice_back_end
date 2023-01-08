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
    async deleteUser(_, { userId }) {
      await User.findByIdAndRemove(userId);
      // await User.findByIdAndRemove(id, {
      //   useFindAndModify: false
      // });
    },
    async updateUser(_, { userId, user }) {
      const { name } = user
      await User.findOneAndUpdate({ userId}, { name });
    },
  }
};