import { createYoga, createSchema, createPubSub } from "graphql-yoga";
import { createServer } from "node:http";

import db from "./data.js";
import resolvers from "@resolvers"; //
import typeDefs from "@type-defs"; //

const pubSub = createPubSub();

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  context: {
    pubSub,
    db,
  },
});

const server = createServer(yoga); 
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
