import Taro, { useState, useEffect } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtList, AtListItem, AtButton, AtAvatar } from 'taro-ui';
import dayjs from 'dayjs';
import BasicPage from '@/components/BasicPage';
import globalData, { checkLoginAndRedirect } from '@/globalData';
import { getMyJoin, getMyApply } from './services';
import styles from './index.scss';

const tagType = {
  myApply: 'myApply',
  myJoin: 'myJoin',
};

export default () => {
  const [tab, setTab] = useState(tagType.myApply);
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    if (globalData.user) {
      if (tab === tagType.myApply) {
        getMyApply().then(result => {
          setList(result);
        });
      } else {
        getMyJoin().then(result => {
          setList(result);
        });
      }
    }
  }, [tab]);

  const { avatarUrl, nickName } = globalData.user || {};

  const handleLogin = () => {
    checkLoginAndRedirect({
      url: '/pages/login/index?redirect=/pages/sorter/setting',
    });
  };

  const handleView = id => {
    Taro.navigateTo({
      url: `/pages/sorter/index?id=${id}`,
    });
  };

  return (
    <BasicPage>
      {globalData.user ? (
        <View className={styles.header}>
          <AtAvatar circle image={avatarUrl} />
          <View className={styles.nickName}>{nickName}</View>
        </View>
      ) : (
        <View onClick={handleLogin} className={styles.header}>
          <AtAvatar circle text="" />
          <View className={styles.nickName}>点击登录</View>
        </View>
      )}
      <View className={styles.operator}>
        <View className={styles.item}>
          <AtButton
            onClick={() => {
              setTab(tagType.myApply);
            }}
            type={tab === tagType.myApply ? 'primary' : 'secondary'}
          >
            我发起的
          </AtButton>
        </View>
        <View className={styles.item}>
          <AtButton
            onClick={() => {
              setTab(tagType.myJoin);
            }}
            type={tab === tagType.myJoin ? 'primary' : 'secondary'}
          >
            我参与的
          </AtButton>
        </View>
      </View>
      <AtList>
        {list.map(item => (
          <AtListItem
            key={item.id}
            title={item.title}
            thumb={item.avatarUrl}
            note={item.nickName}
            extraText={dayjs(item.createTime).format('MM-DD HH:mm')}
            onClick={handleView.bind(null, item.id)}
          />
        ))}
      </AtList>
    </BasicPage>
  );
};
