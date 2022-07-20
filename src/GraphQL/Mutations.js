import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
    }
  }
`;

export const VERIFY_USER_MUTATION = gql`
  mutation verifyeUser(
    $email: String!
    $password: String
  ) {
    verifyUser(
      email: $email
      password: $password
    ) {
      token
    }
  }
`;