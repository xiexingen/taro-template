import { Component as TaroComponent, PureComponent as TaroPureComponent } from '@tarojs/taro';
import { AtActivityIndicator } from 'taro-ui';
import { SHAREAPPMESSAGE } from '@/components/withShare';

// PureComponent组件属性
export interface IPureComponentProps{
  loading?:boolean
}

// Component组件属性
export interface IComponentProps extends IPureComponentProps{
 
}

class Component<P,S,PP> extends TaroComponent<P&IPureComponentProps,S,PP> {
  onShareAppMessage() {
    return SHAREAPPMESSAGE;
  }

  renderLoading = () => {
    const { loading } = this.props;
    return loading ? <AtActivityIndicator mode="center" /> : null;
  };
}

class PureComponent<P,S> extends TaroPureComponent<P&IPureComponentProps,S> {
  onShareAppMessage() {
    return SHAREAPPMESSAGE;
  }

  renderLoading = () => {
    const { loading } = this.props;
    return loading ? <AtActivityIndicator mode="center" /> : null;
  };
}

export { Component, PureComponent };
