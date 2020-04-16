import Taro from '@tarojs/taro';

interface IGlobalData {
  extraData?: any;
  systemInfo?: Taro.getSystemInfoSync.Result;
  user?: { [key: string]: any };
  [key: string]: any;
}
/**
 * 全局数据
 */
// eslint-disable-next-line
export let globalData: IGlobalData = {
  user: Taro.getStorageSync('user'),
};

export const getUser = () => {
  if (!globalData.user) {
    globalData.user = Taro.getStorageSync('user');
  }

  return globalData.user;
};

export const setUser = user => {
  globalData.user = user;
  Taro.setStorageSync('user', user);
};

export default globalData;
