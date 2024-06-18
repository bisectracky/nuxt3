import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";





type EagerUseIDModel = {
  readonly email: string;
  readonly id: string;
  readonly name: string;
}

type LazyUseIDModel = {
  readonly email: string;
  readonly id: string;
  readonly name: string;
}

export declare type UseIDModel = LazyLoading extends LazyLoadingDisabled ? EagerUseIDModel : LazyUseIDModel

export declare const UseIDModel: (new (init: ModelInit<UseIDModel>) => UseIDModel)

type EagerUseIDConnectionModel = {
  readonly items?: (UseID | null)[] | null;
  readonly nextToken?: string | null;
}

type LazyUseIDConnectionModel = {
  readonly items?: (UseID | null)[] | null;
  readonly nextToken?: string | null;
}

export declare type UseIDConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerUseIDConnectionModel : LazyUseIDConnectionModel

export declare const UseIDConnectionModel: (new (init: ModelInit<UseIDConnectionModel>) => UseIDConnectionModel)

const { UseID, UseIDConnection } = initSchema(schema) as {
  UseID: PersistentModelConstructor<UseIDModel>;
  UseIDConnection: PersistentModelConstructor<UseIDConnectionModel>;
};

export {
  
};