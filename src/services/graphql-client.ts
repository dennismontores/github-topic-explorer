import { GraphQLClient, Variables } from 'graphql-request'
const endpoint = process.env.SNOWPACK_PUBLIC_BASE_URL ?? ''

const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.SNOWPACK_PUBLIC_GITHUB_TOKEN ?? ''}`,
  },
})
export const fetcher = (query: string, variables?: Variables | undefined) => graphQLClient.request(query, variables)
