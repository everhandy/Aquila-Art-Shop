const typeDefs = `

type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Artwork {
  _id: ID
  artist: String
  title: String
  image: String
  }

  type Query {
    artwork(_id: ID!): Artwork
    user : User
  }

type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;