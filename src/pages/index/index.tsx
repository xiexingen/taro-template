import Taro from '@tarojs/taro';
// import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import { PureComponent } from '@/components/BaseComponent';
import styles from './index.scss';

// @connect(({  }) => ({

// }))
export default class Index extends PureComponent<any> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config = {
    navigationBarTitleText: '首页',
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="page animated zoomIn">
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
