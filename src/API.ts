/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUseIDInput = {
  title: string,
};

export type UseID = {
  __typename: "UseID",
  id: string,
  name: string,
  email: string,
};

export type UpdateUseIDInput = {
  id: string,
  title?: string | null,
};

export type DeleteUseIDInput = {
  id: string,
};

export type TableUseIDFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type UseIDConnection = {
  __typename: "UseIDConnection",
  items?:  Array<UseID | null > | null,
  nextToken?: string | null,
};

export type CreateUseIDMutationVariables = {
  input: CreateUseIDInput,
};

export type CreateUseIDMutation = {
  createUseID?:  {
    __typename: "UseID",
    id: string,
    name: string,
    email: string,
  } | null,
};

export type UpdateUseIDMutationVariables = {
  input: UpdateUseIDInput,
};

export type UpdateUseIDMutation = {
  updateUseID?:  {
    __typename: "UseID",
    id: string,
    name: string,
    email: string,
  } | null,
};

export type DeleteUseIDMutationVariables = {
  input: DeleteUseIDInput,
};

export type DeleteUseIDMutation = {
  deleteUseID?:  {
    __typename: "UseID",
    id: string,
    name: string,
    email: string,
  } | null,
};

export type GetUseIDQueryVariables = {
  id: string,
};

export type GetUseIDQuery = {
  getUseID?:  {
    __typename: "UseID",
    id: string,
    name: string,
    email: string,
  } | null,
};

export type ListUseIDSQueryVariables = {
  filter?: TableUseIDFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUseIDSQuery = {
  listUseIDS?:  {
    __typename: "UseIDConnection",
    items?:  Array< {
      __typename: "UseID",
      id: string,
      name: string,
      email: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUseIDSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
};

export type OnCreateUseIDSubscription = {
  onCreateUseID?:  {
    __typename: "UseID",
    id: string,
    name: string,
    email: string,
  } | null,
};

export type OnUpdateUseIDSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
};

export type OnUpdateUseIDSubscription = {
  onUpdateUseID?:  {
    __typename: "UseID",
    id: string,
    name: string,
    email: string,
  } | null,
};

export type OnDeleteUseIDSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
};

export type OnDeleteUseIDSubscription = {
  onDeleteUseID?:  {
    __typename: "UseID",
    id: string,
    name: string,
    email: string,
  } | null,
};
