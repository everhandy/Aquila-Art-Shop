const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

// Resolvers
const resolvers = {
  Query: {
    me: async (_, __, { req }) => {
      if (!req.user) {
        throw new AuthenticationError('Not authenticated');
      }

      return User.findById(req.user._id).select('-__v -password');
    },
    users: async () => {
      return User.find().select('-__v -password');
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      console.log('Generated JWT:', token);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user || !(await user.isCorrectPassword(password))) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      console.log('Generated JWT after login:', token);
      console.log('Login successful');
      return { token, user };
    },
  },
};

module.exports = resolvers;