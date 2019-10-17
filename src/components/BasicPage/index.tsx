import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtToast } from 'taro-ui';

export interface BasicPageProps {
  /**
   * 是否显示loading状态
   */
  loading?: boolean;
}

export interface BasicPageStates {}

export default class BasicPage extends Component<BasicPageProps, BasicPageStates> {
  renderLoading = () => {
    const { loading = false } = this.props;
    return <AtToast isOpened={loading} duration={0} hasMask status="loading" text="加载中..." />;
  };

  render() {
    const { children } = this.props;
    return (
      <View className="body animated zoomIn">
        {this.renderLoading()}
        {children}
      </View>
    );
  }
}
