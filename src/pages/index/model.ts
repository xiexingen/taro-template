import extend from '@/utils/model';
import * as meApi from './service';

export default extend({
  namespace: 'me',
  state: {},
  effects: {
    *getList({ payload }, { call, put }) {
      const result = yield call(meApi.getList, payload);
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
