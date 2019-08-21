import Taro from '@tarojs/taro';

interface IGlobalData {
  extraData?: any;
  systemInfo?: Taro.getSystemInfoSync.Return;
}
/**
 * 全局数据
 */
// eslint-disable-next-line
export let globalData: IGlobalData = {};
