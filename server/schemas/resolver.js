const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

// Resolvers
const resolvers = {
  Query: {
    users: async () => {
      return User.find()
        .select("-__v -password")
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      console.log("Login successful");
      return { token, user };
    },
  },
};

module.exports = resolvers;
