import Taro, { Config } from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { PureComponent } from '@/components/BaseComponent';
import BasicPage from '@/components/BasicPage';
import { LoginProps } from './login.interface';

// @ts-ignore
@connect(({ user }) => ({
  weChatUserInfo: user.weChatUserInfo,
}))
class Login extends PureComponent<LoginProps> {
  config: Config = {
    // navigationBarTitleText: '页面标题'
  };

  // componentWillMount() {}

  componentDidMount() {}

  // componentWillUnmount() {}

  componentDidShow() {}

  // componentDidHide() {}

  handleGetUserInfo = () => {
    const { dispatch } = this.props;
    Taro.login().then(result => {
      const { code } = result;

      dispatch({
        type: 'user/getWechatUserInfo',
        payload: {},
      })
        .then(userInfo => {
          dispatch({
            type: 'user/login',
            payload: {
              code,
              nickName: userInfo.nickName,
              city: userInfo.city,
              province: userInfo.province,
              avatarUrl: userInfo.avatarUrl,
            },
          }).then(_ => {
            // 判断是否已经注册过，没有注册过则提示输入手机号码，否则跳转到登录页面
            Taro.navigateTo({
              url: '/pages/index/index',
            });
          });
        })
        .catch(_ => {
          Taro.showModal({
            title: '授权提示',
            content:
              '小程序需要您的微信授权才能使用哦~ 错过授权页面的处理方法：删除小程序->重新搜索进入->点击授权按钮',
          });
        });
    });
  };

  render() {
    return (
      <BasicPage>
        <AtButton onGetUserInfo={this.handleGetUserInfo} openType="getUserInfo">
          登录
        </AtButton>
      </BasicPage>
    );
  }
}
export default Login;
