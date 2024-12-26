import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
import { schema } from "./schema/index.js";
import { resolvers } from "./resolvers/index.js";
import { connectMongoose } from "./mongoose/mongoose-connection.js";

const app = express();
await connectMongoose();
var root = {
  helloQuery() {
    return "Hello world!";
  },
};
app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: resolvers,
  })
);
app.get("/", (_req, res) => {
  res.type("html");
  res.end(ruruHTML({ endpoint: "/graphql" }));
});

// Start the server at port
app.listen(4000, () => {
  console.log("server working: http://localhost:4000");
});
