import Taro, { Component, PureComponent } from '@tarojs/taro';
import { SHAREAPPMESSAGE } from '@/components/withShare';

Component.prototype.onShareAppMessage;
PureComponent.prototype.onShareAppMessage = (
  _: Taro.ShareAppMessageObject
): Taro.ShareAppMessageReturn => {
  return SHAREAPPMESSAGE;
};

export { Component, PureComponent };
