import Taro from '@tarojs/taro';
import { login } from '@/services/user';

export default {
  namespace: 'user',
  state: {
    // 微信信息
    weChatUserInfo: {
      avatarUrl: '',
      city: '',
      country: '',
      gender: 1,
      language: '',
      nickName: '',
      province: '',
      signature: '',
      iv: '',
      encryptedData: '',
    },
  },
  effects: {
    *getWechatUserInfo(_, { put }) {
      const result = yield Taro.getUserInfo();
      const weChatUserInfo = {
        ...result.userInfo,
        signature: result.signature,
        iv: result.iv,
        encryptedData: result.encryptedData,
      };
      yield put({
        type: 'update',
        weChatUserInfo,
      });
      return weChatUserInfo;
    },
    *login({ payload }, { call }) {
      const result = yield call(login, payload);
      return result;
    },
  },
  reducers: {
    update(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
