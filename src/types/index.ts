export interface IKeyValue<T = any> {
  [key: string]: T;
}

interface IDispatch {
  ({ type: string, payload: IKeyValue }): Promise<any>;
}

export interface IPureComponentProps {
  loading?: boolean;
  dispatch: IDispatch;
}

export interface IComponentProps {
  loading?: boolean;
  dispatch: IDispatch;
}
