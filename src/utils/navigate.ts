import Taro from '@tarojs/taro';
// import { stringify } from 'querystring';

const HISTORY_STORE_KEY = '_HISTORY_STORE_KEY';

export const clear = () => {
  Taro.removeStorageSync(HISTORY_STORE_KEY);
};

export const push = (url: string) => {
  const historys: string[] = Taro.getStorageSync(HISTORY_STORE_KEY) || [];
  const limitHistorys = historys.slice(historys.length - 9, historys.length);
  const newHistorys = [...limitHistorys, url];
  Taro.setStorageSync(HISTORY_STORE_KEY, newHistorys);
};

/**
 * 获取当前队列中的所有页面
 */
export const getPages = (): string[] => {
  const historys: string[] = Taro.getStorageSync(HISTORY_STORE_KEY) || [];
  return historys;
};

/**
 * 是否含有历史记录
 */
export const hasHistory = (): boolean => {
  const items = Taro.getStorageSync(HISTORY_STORE_KEY) || [];
  return items.length > 0;
};

/**
 * 获取最后一条url,并从列表中移除
 */
export const pop = (): string => {
  const historys: string[] = Taro.getStorageSync(HISTORY_STORE_KEY) || [];
  const url = historys.pop();
  Taro.setStorageSync(HISTORY_STORE_KEY, historys);
  return url || '';
};

/**
 * 跳转到指定页面，并处理出错的情况
 * @param option 参数
 * @param option.url {string} 跳转的url页面
 */
export const navigateToWithFail = (option: { url }, isBack?: boolean) => {
  const prePages = Taro.getCurrentPages();
  const lastPage = prePages[prePages.length - 1];
  if (lastPage.route === option.url) {
    return;
  }
  if (!isBack) {
    let queryString = '';
    Object.keys(lastPage.options).forEach(key => {
      if (key !== '__key_') {
        queryString += `${queryString ? `&${key}` : 'key'}=${lastPage.options[key]}`;
      }
    });

    push(`/${lastPage.route}${queryString ? `?${queryString}` : ''}`);
  }
  Taro.navigateTo({
    url: option.url,
    fail: () => {
      Taro.reLaunch({
        url: option.url,
      });
    },
  });
};

/* 获取当前页url */
export const getCurrentPageUrl = () => {
  const pages = getPages();
  const currentPage = pages[pages.length - 1];
  return currentPage;
};
