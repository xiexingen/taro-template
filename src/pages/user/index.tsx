import Taro from '@tarojs/taro';
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { PureComponent } from '@/components/BaseComponent';
import BasicPage from '@/components/BasicPage';
import AuthorizationView from '@/components/AuthorizationView';

export default () => {
  return (
    <BasicPage>
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
      <AuthorizationView user={null} onAgree={_ => {}} onDeny={() => {}}>
        <View>生成海报</View>
      </AuthorizationView>
    </BasicPage>
  );
};
