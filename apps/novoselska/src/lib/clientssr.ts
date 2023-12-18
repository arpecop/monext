import pkg from '@apollo/client';
const { ApolloClient, createHttpLink, InMemoryCache } = pkg;

const clientssr = (token: string) => new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: `https://hasura.kloun.lol/v1/graphql`,
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer ${token}`, // Add auth header
    },
  }),
  cache: new InMemoryCache(),
});



export default clientssr;