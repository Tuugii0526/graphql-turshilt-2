import { buildSchema } from "graphql";
export const schema = buildSchema(
  `
  scalar Date

  input InputTodo {
    taskName: String!
    description: String!
    priority: Int!
    tags: [String]
  }

  input InputTodoUpdate {
    taskName: String!
    description: String!
    priority: Int!
    tags: [String]
    isDone: Boolean
  }

  type Todo {
    taskName: String
    description: String
    isDone: Boolean!
    priority: Int
    tags: [String]
    createdAt: Date!
    updatedAt: Date!
    _id: ID
  }
  type Query {
    helloQuery: String
    getDoneTasks: [Todo]
    getAllTasks: [Todo]
    search(term: String!): [Todo]
  }

  type Mutation {
    todoAdd(todo: InputTodo!): Todo
    todoUpdate(todo: InputTodoUpdate, id: ID): Todo
  }
`
);
