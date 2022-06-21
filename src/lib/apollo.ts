import {ApolloClient, InMemoryCache} from "@apollo/client"

export const client = new ApolloClient({
  uri: 'address graphcms',
  cache: new InMemoryCache

})