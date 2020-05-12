import Taro from '@tarojs/taro';
import globalData from '@/globalData';

const USE_ONCE_TEMP_DATA = '__userOnceTemplateData';

interface ICheckProp<T> {
  url?: string;
  tab?: string;
  data?: T;
}

/**
 * 缓存数据源，使用一次即被清除
 */
function useOnceTempData<T = any>(
  defaultValue: T,
  key: string = USE_ONCE_TEMP_DATA
): [T, (prop: ICheckProp<T>) => boolean] {
  const storeKe = key === USE_ONCE_TEMP_DATA ? key : `${USE_ONCE_TEMP_DATA}_${key}`;

  let storeData = Taro.getStorageSync(storeKe);
  if (storeData) {
    Taro.removeStorageSync(storeKe);
  }

  const checkLoginAndRedirect = ({ data, url, tab }: ICheckProp<T>): boolean => {
    if (globalData.user) {
      return true;
    }
    data && Taro.setStorageSync(storeKe, data);
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

  storeData = storeData || defaultValue;

  return [storeData, checkLoginAndRedirect];
}

export default useOnceTempData;
