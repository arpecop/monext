import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';



const httpLink = () =>
  new HttpLink({
    uri: `https://hasura.kloun.lol/v1/graphql`,
    headers: {
      // 'x-hasura-admin-secret': process.env.REACT_APP_HASURA_SECRET,
    },
  });

const wsLink = () =>
  new GraphQLWsLink(
    createClient({
      url: `wss://hasura.kloun.lol/v1/graphql`,
    }),
  );

const splitLink = () =>
  split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink(),
    httpLink(),
  );

const client = new ApolloClient({
  link: splitLink(),
  cache: new InMemoryCache(),
});

export default client;