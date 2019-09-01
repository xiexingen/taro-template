import Taro, { Config } from '@tarojs/taro';
// import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { PureComponent } from '@/components/BaseComponent';
import { MeProps } from './me.interface';
import styles from './index.scss';

// @connect(({ me }) => ({
//     ...me,
// }))
class Me extends PureComponent<MeProps> {
  config: Config = {
    // navigationBarTitleText: '页面标题'
  };

  componentDidMount() {}

  render() {
    return (
      <View className="content animated zoomIn">
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
      </View>
    );
  }
}
export default Me;
