import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Auth } from 'aws-amplify';
import { setContext } from '@apollo/client/link/context';
import { createHttpLink } from '@apollo/client/link/http';

const httpLink = createHttpLink({
  uri: process.env.NUXT_ENV_APPSYNC_GRAPHQL_ENDPOINT,
});

const authLink = setContext(async (_, { headers }) => {
  const session = await Auth.currentSession();
  const token = session.getIdToken().getJwtToken();
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    }
  };
});

export default () => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
};
