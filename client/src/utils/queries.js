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

// the id in this case has be to dynamic and not static
export const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    # how to dynamically generate the id?
    character(id: $id) {
      name
      gender
      image
      origin {
        name
      }
    }
  }
`;
