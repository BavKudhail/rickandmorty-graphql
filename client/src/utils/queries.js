import { gql } from "@apollo/client";

// gql is used in order to use graphql queries
export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        image
        name
      }
    }
  }
`;
