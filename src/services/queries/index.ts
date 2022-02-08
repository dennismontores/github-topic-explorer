import { gql } from 'graphql-request'

export const getTopics = gql`
  query GetTopics($topic: String!) {
    topic(name: $topic) {
      name
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
        relatedTopics(first: 10) {
          id
          name
          stargazerCount
        }
      }
    }
  }
`
