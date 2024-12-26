import { GraphQLScalarType, Kind } from "graphql";
import { getDoneTasks } from "./queries/get-done-tasks.js";
import { getAllTasks } from "./queries/get-all-tasks.js";
import { search } from "./queries/search.js";
import { todoAdd } from "./mutations/todo-add.js";
import { todoUpdate } from "./mutations/todo-update.js";
import { helloQuery } from "./queries/hello.js";

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error("GraphQL Date Scalar serializer expected a `Date` object");
  },
  parseValue(value) {
    if (typeof value === "number") {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error("GraphQL Date Scalar parser expected a `number`");
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});
export const resolvers = {
  Date: dateScalar,
  // Query: {
  //   helloQuery,
  //   getDoneTasks,
  //   getAllTasks,
  //   search,
  // },
  // Mutation: {
  //   todoAdd,
  //   todoUpdate,
  // },
  helloQuery,
  getDoneTasks,
  getAllTasks,
  search,
  todoAdd,
  todoUpdate,
};
