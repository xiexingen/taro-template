import Taro from '@tarojs/taro';

interface IGlobalData{
    extraData?:any,
    systemInfo?:Taro.getSystemInfoSync.Return
}
/**
 * 全局数据
 */
export let globalData:IGlobalData={

};