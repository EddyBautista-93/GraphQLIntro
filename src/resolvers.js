// This resolvers.js file is going to be the way we provide 
// the instructions for turning a GraphQL operation into data.

import { users } from "./db";

const resolvers = {
  Query: {
    hello: () => "Hello World!"
  }
};

export default resolvers;