import Taro, { Component as TComponent, PureComponent as TPureComponent } from '@tarojs/taro';
import { IPureComponentProps, IComponentProps } from '@/types';
import { DEFAULT_SHAREPROPS } from '@/components/withShare';

export class PureComponent<P = {}, S = {}> extends TPureComponent<P & IPureComponentProps, S> {
  onShareAppMessage(_: Taro.ShareAppMessageObject) {
    return DEFAULT_SHAREPROPS;
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

export class Component<P = {}, S = {}> extends TComponent<P & IComponentProps, S> {
  onShareAppMessage(_: Taro.ShareAppMessageObject) {
    return DEFAULT_SHAREPROPS;
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
