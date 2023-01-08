export const typeDefs = `
  type User {
    name: String
    surname: String
  }
  
  input UserInput {
    name: String
    surname: String
  }
  
  type NoAnswerOperation {
    ok: Boolean
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    createUser(user: UserInput): NoAnswerOperation
  }
`;