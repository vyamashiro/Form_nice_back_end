export const typeDefs = `
  type User {
    name: String
    surname: String
  }

  type Query {
    users: [User]
  }
`;