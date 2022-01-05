import { Action, Reducer, Dispatch } from 'redux';
import { Model } from 'dva-core';

/**
 * ActionType， 推导当前effect & reducer
 * @default string
 */
type ActionType<M extends Model | string> = M extends Model
  ? `${M['namespace']}/${(keyof M['effects'] | keyof M['reducers']) & string}`
  : string;

type DispatchType = <S>(action: {
  type: ActionType<S extends Model ? S : string>;
  payload?: any;
  [key: string]: any;
}) => Promise<any>;

export type DvaDispatch = DispatchType & Dispatch;
// interface DvaDispatch extends DvaDispatchType, Dispatch {}

export type Effect = (action: AnyAction, effects: EffectsCommandMap) => void;
interface AnyAction extends Action {
  [extraProps: string]: any;
}
interface EffectsCommandMap {
  put: <S>(action: {
    type: EffectAction<S extends Model ? S : string>;
    payload?: any;
    [key: string]: any;
  }) => any;
  call: Function;
  select: Function;
  take: Function;
  cancel: Function;
  [key: string]: any;
}

type EffectAction<M extends Model | string> = M extends Model
  ?
      | `${M['namespace']}/${(keyof M['effects'] | keyof M['reducers']) &
          string}`
      | `${(keyof M['effects'] | keyof M['reducers']) & string}`
  : string;

export interface Model {
  namespace: string;
  state?: any;
  reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer;
  effects?: EffectsMapObject;
  subscriptions?: SubscriptionsMapObject;
}

type ReducersMapObject<S = any, A extends Action = Action> = {
  [K in keyof S]: Reducer<S[K], A>;
};
type ReducersMapObjectWithEnhancer = [ReducersMapObject, ReducerEnhancer];
interface ReducerEnhancer {
  (reducer: Reducer<any>): void;
}
interface EffectsMapObject {
  [key: string]: Effect | EffectWithType;
}
type EffectWithType = [Effect, { type: EffectType }];
type EffectType = 'takeEvery' | 'takeLatest' | 'watcher' | 'throttle';
interface SubscriptionsMapObject {
  [key: string]: Subscription;
}
type Subscription = (api: SubscriptionAPI, done: Function) => void;
interface SubscriptionAPI {
  history: History;
  dispatch: DvaDispatch;
}
