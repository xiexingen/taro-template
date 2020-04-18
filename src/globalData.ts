import Taro from '@tarojs/taro';

interface IGlobalData {
  extraData?: any;
  systemInfo?: Taro.getSystemInfoSync.Result;
  user?: { [key: string]: any };
  [key: string]: any;
}

interface ICheckProp {
  url?: string;
  tab?: string;
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

/**
 * 清空登录状态
 */
export const cleanToken = () => {
  globalData.user = undefined;
  Taro.removeStorageSync('user');
  Taro.removeStorageSync('token');
};

export const setUser = user => {
  globalData.user = user;
  Taro.setStorageSync('user', user);
  // 设置token
  Taro.setStorageSync('token', user.token);
};

/**
 * 检测是否已经登录
 * @param param0 参数
 */
export const checkLoginAndRedirect = ({ url, tab }: ICheckProp): boolean => {
  if (globalData.user) {
    return true;
  }
  if (url) {
    Taro.navigateTo({
      url,
    });
  }
  if (tab) {
    Taro.switchTab({
      url: tab,
    });
  }
  return false;
};

export default globalData;
