import Taro, { Config } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';
import { PureComponent } from '@/components/BaseComponent';
import { UserProps } from './user.interface';

@connect(({ user }) => ({
  ...user,
}))
class User extends PureComponent<UserProps> {
  config: Config = {
    // navigationBarTitleText: '页面标题'
  };

  // componentWillMount() {}

  // componentDidMount() {}

  // componentWillUnmount() {}

  componentDidShow() {}

  // componentDidHide() {}

  render() {
    return <View className="content animated zoomIn">用户 页面内容</View>;
  }
}
export default User;
