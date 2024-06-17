/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUseID = /* GraphQL */ `mutation CreateUseID($input: CreateUseIDInput!) {
  createUseID(input: $input) {
    id
    name
    email
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUseIDMutationVariables,
  APITypes.CreateUseIDMutation
>;
export const updateUseID = /* GraphQL */ `mutation UpdateUseID($input: UpdateUseIDInput!) {
  updateUseID(input: $input) {
    id
    name
    email
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUseIDMutationVariables,
  APITypes.UpdateUseIDMutation
>;
export const deleteUseID = /* GraphQL */ `mutation DeleteUseID($input: DeleteUseIDInput!) {
  deleteUseID(input: $input) {
    id
    name
    email
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUseIDMutationVariables,
  APITypes.DeleteUseIDMutation
>;
