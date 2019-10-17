import Taro, { Config } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { PureComponent } from '@/components/BaseComponent';
import BasicPage from '@/components/BasicPage';
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

  componentDidShow() {
    // Taro.navigateTo({
    //   url:'/pagesAccount/pages/login/index'
    // })
    // Taro.login().then(result=>{
    //   if (result.code) {
    //     Taro.showToast({
    //       title:result.code
    //     })
    //     // this.getUserInfo(result.code)
    //   } else {
    //     Taro.showToast({
    //       title:result.errMsg
    //     })
    //   }
    // })
  }

  // getUserInfo=(code)=>{
  //   Taro.getUserInfo({
  //     // 获取成功，全局存储用户信息，开发者服务器登录
  //     success: (res)=>{
  //      debugger;
  //     },
  //     // 获取失败，弹窗提示一键登录
  //     fail:()=>{
  //      this.setState({
  //       showLoginModal:true
  //      })
  //     }
  //   })
  // }

  handlePay = () => {};

  render() {
    return (
      <BasicPage loading>
        <View className="text-center">
          <View className="title">
            <View className="title-txt">个人中心</View>
          </View>
        </View>
        <View className="operator-bar">
          <AtButton openType="getUserInfo" className="btn-red">
            登录
          </AtButton>
          <AtButton type="primary" onClick={this.handlePay}>
            支付
          </AtButton>
        </View>
      </BasicPage>
    );
  }
}
export default User;
