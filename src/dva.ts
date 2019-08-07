import { create } from "dva-core";
import { createLogger } from "redux-logger";
import  createLoading  from "dva-loading";

let app
let store
let registered

function createApp(options) {
    if (process.env.NODE_ENV === 'development') {
         // redux 的日志
        options.onAction = [createLogger()]
    }
   
    app = create({
        ...options
    })
    app.use(createLoading({}))

    if (!registered) {
        options.models.forEach(model => app.model(model));
    }
    registered = true;
    app.start()

    store = app._store;
    app.getStore = () => store;
    
    app.use({
        onError(err){
            console.log(err);
        }
    })

    app.dispatch = store.dispatch;
    return app;
}

export default{
    createApp,
    getDispatch(){
        return app.dispatch
    }
}