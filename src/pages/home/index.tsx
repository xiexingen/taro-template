/* eslint-disable global-require */

import Taro from '@tarojs/taro';
// import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';
import { AtListItem } from 'taro-ui';
import BasicPage from '@/components/BasicPage';
import styles from './index.scss';

const datas: any[] = [
  {
    order: 1,
    icon: require('@/assets/svgs/random.svg'),
    title: '排顺序',
    desc: '随机抽取号码',
    url: '/pages/sorter/setting',
  },
];

export default () => {
  const handleNavigate = item => {
    Taro.navigateTo({
      url: item.url,
    });
  };
  return (
    <BasicPage>
      <View className={styles.container}>
        {datas.map(item => (
          <View key={item.order} className={styles.item} onClick={handleNavigate.bind(null, item)}>
            <View className={styles.order}>{item.order}</View>
            <AtListItem hasBorder={false} title={item.title} note={item.desc} thumb={item.icon} />
          </View>
        ))}
      </View>
    </BasicPage>
  );
};
