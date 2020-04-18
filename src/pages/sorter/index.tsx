import Taro, { useRouter, useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtButton, AtIcon, AtAvatar } from 'taro-ui';
import { useRequest } from '@/hooks';
import BasicPage from '@/components/BasicPage';
import { getDetail, takeNumber } from './services/sort';
import globalData, { checkLoginAndRedirect } from '@/globalData';

import styles from './index.scss';

export default () => {
  const {
    params: { id },
  } = useRouter();
  const { user = {} } = globalData;
  const { loadding, data: model } = useRequest(id, getDetail);

  const [submitting, setSubmitting] = useState(false);

  const handleTack = () => {
    if (
      checkLoginAndRedirect({
        url: '/pages/login/index?redirect=/pages/sorter/setting',
      })
    ) {
      setSubmitting(true);
      takeNumber(id)
        .then(result => {
          setSubmitting(false);
          const preUsers = model.users.filter(m => m.orderNo < result.orderNo);
          const postUsers = model.users.filter(m => m.orderNo > result.orderNo);
          const newItem = { ...result, avatarUrl: user['avatarUrl'], nickName: user.nickName };
          model.users = [...preUsers, newItem, ...postUsers];
        })
        .catch(() => {
          Taro.showToast({
            title: '出错啦，请重试!!!',
          });
          setSubmitting(true);
        });
    }
  };

  return (
    <BasicPage className={styles.body} loading={loadding || submitting}>
      <View className={styles.header}>
        <View className="at-article">
          <View className={`${styles['header-title']} at-article__h2`}>{model.title}</View>
        </View>
        <View className={`at-row at-row__align--center ${styles['header-tag']} at-article__h3`}>
          <View className="at-col t-center">
            <View>总人数</View>
            <View className={styles.number}>{model.total}</View>
          </View>
          <View className="at-col t-center">
            <View>已抽序号数</View>
            <View className={styles.number}>{model.users.length}</View>
          </View>
          <View className="at-col t-center">
            <View>剩余序号数</View>
            <View className={`${styles.number} ${styles.remain}`}>
              {model.total - model.users.length}
            </View>
          </View>
        </View>
        <View className={styles.my}>
          {model.currentUser ? (
            <View className={`at-article__h3 t-center ${styles.order}`}>
              您的排序是：第<View className={styles.orderNo}>{model.currentUser.orderNo}</View>位
            </View>
          ) : (
            <AtButton
              disabled={model.total <= model.users.length}
              circle
              onClick={handleTack}
              type="primary"
            >
              点击抽取排序
            </AtButton>
          )}
        </View>
      </View>
      <View className="t-center">
        <AtIcon color="#e7ebed" value="chevron-up" />
      </View>
      <View className={styles.users}>
        {model.users.map(item => (
          <View key={item.id} className={styles['user-item']}>
            第 <View className={styles['item-order']}>{item.orderNo}</View> 位 :
            <AtAvatar size="small" className={styles.avatar} circle image={item.avatarUrl} />
            <View className={styles.nickName}>{item.nickName}</View>
          </View>
        ))}
      </View>
      <View className="t-center">
        <AtIcon color="#e7ebed" value="chevron-down" />
      </View>
    </BasicPage>
  );
};
