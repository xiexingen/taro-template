import Taro, { Component as TComponent, PureComponent as TPureComponent } from '@tarojs/taro';
import { DEFAULT_SHAREPROPS } from '@/components/withShare';

export class PureComponent<P = {}, S = {}> extends TPureComponent<P, S> {
  onShareAppMessage(_: Taro.ShareAppMessageObject) {
    return DEFAULT_SHAREPROPS;
  }
}

export class Component<P = {}, S = {}> extends TComponent<P, S> {
  onShareAppMessage(_: Taro.ShareAppMessageObject) {
    return DEFAULT_SHAREPROPS;
  }
}
