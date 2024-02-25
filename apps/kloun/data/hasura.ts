import { ApolloClient, InMemoryCache, gql as gqla } from "@apollo/client";
export const gql = gqla;
const client = new ApolloClient({
  uri: "http://130.204.65.82:8080/v1/graphql",
  cache: new InMemoryCache(),
});

export default client;
