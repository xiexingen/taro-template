import Taro, { Component } from '@tarojs/taro';
import { View, Block } from '@tarojs/components';
import { AtActionSheet, AtActionSheetItem } from 'taro-ui';

export interface IAuthorizationViewProps {
  onAgree: (user: any) => void;
  onDeny: () => void;
  user: any;
}

export interface IAuthorizationStates {
  showLoginPanel: boolean;
}

export default class AuthorizationView extends Component<
  IAuthorizationViewProps,
  IAuthorizationStates
> {
  state = {
    showLoginPanel: false,
  };

  /**
   * 登录
   */
  handleLogin = () => {
    const { user, onAgree } = this.props;
    if (user) {
      onAgree && onAgree(user);
    } else {
      // 显示登录框
      this.setState({
        showLoginPanel: true,
      });
    }
  };

  /**
   * 授权登录
   * @param e
   */
  async bindGetUserInfo(e) {
    if (e.detail.errMsg === 'getUserInfo:ok') {
      const userResult = await Taro.login();
      this.setState({
        showLoginPanel: false,
      });
      this.props.onAgree && this.props.onAgree(userResult);
    } else {
      this.props.onDeny && this.props.onDeny();
    }
  }

  handleCancelLogin = () => {
    this.setState({
      showLoginPanel: false,
    });
  };

  render() {
    const { children } = this.props;
    const { showLoginPanel } = this.state;
    return (
      <Block>
        <View onClick={this.handleLogin}>{children}</View>
        {showLoginPanel && (
          <AtActionSheet isOpened>
            <AtActionSheetItem>微信用户快速登录</AtActionSheetItem>
          </AtActionSheet>
        )}
      </Block>
    );
  }
}
