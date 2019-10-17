import Taro, { Config } from '@tarojs/taro';
// import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { PureComponent } from '@/components/BaseComponent';
import BasicPage from '@/components/BasicPage';
import { MeProps } from './me.interface';
import styles from './index.scss';

// @connect(({ me }) => ({
//     ...me,
// }))
class Me extends PureComponent<Partial<MeProps>> {
  onShareAppMessage(share) {
    return {
      ...super.onShareAppMessage(share),
      title: '主页',
    };
  }
  config: Config = {
    // navigationBarTitleText: '页面标题'
  };

  componentDidMount() {}

  render() {
    return (
      <BasicPage>
        <View className={styles.aa}>Hello world!</View>
        <AtButton type="primary">test</AtButton>
        <View className={styles.aa}>Hello world!</View>
        <AtButton type="primary">test</AtButton>
        <View className={styles.aa}>Hello world!</View>
        <AtButton type="primary">test</AtButton>
        <View className={styles.aa}>Hello world!</View>
        <AtButton type="primary">test</AtButton>
        <View className={styles.aa}>Hello world!</View>
        <AtButton type="primary">test</AtButton>
        <View className={styles.aa}>Hello world!</View>
        <AtButton type="primary">test</AtButton>
        <View className={styles.aa}>Hello world!</View>
        <AtButton type="primary">test</AtButton>
        <View className={styles.aa}>Hello world!</View>
        <AtButton type="primary">test</AtButton>
        <View className={styles.aa}>Hello world!</View>
        <AtButton type="primary">test</AtButton>
      </BasicPage>
    );
  }
}
export default Me;
