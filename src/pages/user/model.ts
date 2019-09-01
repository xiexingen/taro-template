import extend from '@/utils/model';
import * as userApi from './service';

export default extend({
  namespace: 'user',
  state: {},
  effects: {
    *getList({ payload }, { call, put }) {
      const result = yield call(userApi.getList, payload);
      yield put({
        type: 'update',
        payload: {
          // TODO
          result,
        },
      });
    },
  },
});
