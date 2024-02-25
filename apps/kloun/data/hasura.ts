import { ApolloClient, InMemoryCache, gql as gqla } from "@apollo/client";
export const gql = gqla;
const client = new ApolloClient({
  uri: "https://hasura.kloun.lol/v1/graphql",
  cache: new InMemoryCache(),
});

export default client;
