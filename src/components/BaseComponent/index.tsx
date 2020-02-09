import Taro, { Component as TComponent, PureComponent as TPureComponent } from '@tarojs/taro';
import { DEFAULT_SHAREPROPS } from '@/components/withShare';

export class PureComponent<P = {}, S = {}> extends TPureComponent<P, S> {
  // @ts-ignore
  onShareAppMessage(share: Taro.ShareAppMessageObject): Taro.ShareAppMessageReturn {
    return { ...DEFAULT_SHAREPROPS };
  }

  // renderLoading=(loading:boolean)=>{
  //   if(loading){
  //     return <View>loading...</View>
  //   }
  //   return null;
  // }
  // _createLoadingData =()=>{
  //   return (result:boolean)=>result;
  // }
}

export class Component<P = {}, S = {}> extends TComponent<P, S> {
  // @ts-ignore
  onShareAppMessage(share: Taro.ShareAppMessageObject): Taro.ShareAppMessageReturn {
    return { ...DEFAULT_SHAREPROPS };
  }
  // renderLoading=(loading:boolean)=>{
  //   if(loading){
  //     return <View>loading...</View>
  //   }
  //   return null;
  // }
  // _createLoadingData =()=>{
  //   return (result:boolean)=>result;
  // }
}
