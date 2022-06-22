import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4osdu3215h401w71dpkad7m/master',
  
  cache: new InMemoryCache

})