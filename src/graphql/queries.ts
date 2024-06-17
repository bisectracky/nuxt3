/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUseID = /* GraphQL */ `query GetUseID($id: ID!) {
  getUseID(id: $id) {
    id
    name
    email
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUseIDQueryVariables, APITypes.GetUseIDQuery>;
export const listUseIDS = /* GraphQL */ `query ListUseIDS(
  $filter: TableUseIDFilterInput
  $limit: Int
  $nextToken: String
) {
  listUseIDS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUseIDSQueryVariables,
  APITypes.ListUseIDSQuery
>;
