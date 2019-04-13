import { create } from "dva-core";
import createLoading from "dva-loading";
import dvaImmer from "dva-immer";

let app;
let store;
let dispatch;

function createApp(opt) {
  app = create(opt);
  app.use(createLoading({}));
  app.use(dvaImmer());

  if (!global["registered"]) {
    opt.models.forEach(model => app.model(model));
  }
  global["registered"] = true;
  app.start();

  store = app._store;
  dispatch = store.dispatch;
  app.getStore = () => store;
  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
};
