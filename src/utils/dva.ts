import { create } from 'dva-core';
// import {createLogger } from 'redux-logger';
import createLoading from 'dva-loading';

let app: {
  use: (arg0: any) => void;
  model: (arg0: any) => any;
  start: () => void;
  _store: any;
  getStore: () => any;
  dispatch: any;
};
let store: { dispatch: any };
let dispatch: any;
let registered: boolean;

function createApp(opt: { models: any[]; initialState: any }) {
  // redux日志, 引用redux-logger
  // opt.onAction = [createLogger()];
  app = create(opt);
  app.use(createLoading({}));

  if (!registered) opt.models.forEach((model: any) => app.model(model));
  registered = true;
  app.start();

  store = app._store;
  app.getStore = () => store;

  dispatch = store.dispatch;

  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
  getStore() {
    // 这个是在非组件的文件中获取Store的方法, 不需要可以不暴露
    return app.getStore();
  },
};
