/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUseID = /* GraphQL */ `subscription OnCreateUseID($id: ID, $title: String) {
  onCreateUseID(id: $id, title: $title) {
    id
    name
    email
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUseIDSubscriptionVariables,
  APITypes.OnCreateUseIDSubscription
>;
export const onUpdateUseID = /* GraphQL */ `subscription OnUpdateUseID($id: ID, $title: String) {
  onUpdateUseID(id: $id, title: $title) {
    id
    name
    email
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUseIDSubscriptionVariables,
  APITypes.OnUpdateUseIDSubscription
>;
export const onDeleteUseID = /* GraphQL */ `subscription OnDeleteUseID($id: ID, $title: String) {
  onDeleteUseID(id: $id, title: $title) {
    id
    name
    email
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUseIDSubscriptionVariables,
  APITypes.OnDeleteUseIDSubscription
>;
