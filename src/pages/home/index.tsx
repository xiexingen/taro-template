import Taro from '@tarojs/taro';
// import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';
import { AtButton } from 'taro-ui';
import BasicPage from '@/components/BasicPage';
import styles from './index.scss';

export default () => {
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
};
