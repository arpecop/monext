import pkg from '@apollo/client';
const { ApolloClient, HttpLink, InMemoryCache } = pkg;

const httpLink = (token: string) =>
  new HttpLink({
    uri: `https://hasura.kloun.lol/v1/graphql`,
    headers: {
      Authorization: `Bearer ${token}`, // Add auth header
    },
  });


const clientssr = (token: string) => new ApolloClient({
  link: httpLink(token),
  cache: new InMemoryCache(),
});



export default clientssr;