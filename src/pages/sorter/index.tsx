import Taro, { useRouter, useState, useDidShow } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { AtButton, AtIcon, AtAvatar, AtCurtain } from 'taro-ui';
import BasicPage from '@/components/BasicPage';
import globalData, { checkLoginAndRedirect } from '@/globalData';
import { DEFAULT_SHAREPROPS } from '@/components/withShare';
import { APIPREFIX } from '@/constants';
import { getDetail, takeNumber } from './services/sort';

import styles from './index.scss';

export default () => {
  const {
    params: { id },
  } = useRouter();
  const { user = {} } = globalData;
  const [model, setModel] = useState<any>({ total: 0, users: [] });

  const [qrCodeVisible, changeQrCodeVisible] = useState(false);
  const [loadding, setLoadding] = useState(false);

  useDidShow(() => {
    if (!id) {
      Taro.switchTab({
        url: '/pages/home/index',
      });
    } else {
      setLoadding(true);
      getDetail(id).then(result => {
        if (result.total === 0) {
          Taro.switchTab({
            url: '/pages/home/index',
          });
        } else {
          setLoadding(false);
          setModel(result);
        }
      });
    }
  });

  const handleTack = () => {
    if (
      checkLoginAndRedirect({
        url: `/pages/login/index?redirect=/pages/sorter/index&id=${id}`,
      })
    ) {
      setLoadding(true);
      takeNumber(id)
        .then(result => {
          const preUsers = model.users.filter(m => m.orderNo < result.orderNo);
          const postUsers = model.users.filter(m => m.orderNo > result.orderNo);
          const newItem = { ...result, avatarUrl: user['avatarUrl'], nickName: user.nickName };
          setModel({
            ...model,
            currentUser: newItem,
            users: [...preUsers, newItem, ...postUsers],
          });
          setLoadding(false);
        })
        .catch(() => {
          Taro.showToast({
            title: '出错啦，请重试!!!',
          });
          setLoadding(true);
        });
    }
  };

  Taro.useShareAppMessage(() => {
    return {
      ...DEFAULT_SHAREPROPS,
      path: `/pages/sorter/index?id=${id}`,
    };
  });
  if (model.userId === user.id) {
    Taro.showShareMenu({
      withShareTicket: true,
    });
  } else {
    Taro.hideShareMenu();
  }

  return (
    <BasicPage className={styles.body} loading={loadding}>
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
      {qrCodeVisible ? (
        <View>
          <AtCurtain onClose={() => {}} isOpened={qrCodeVisible}>
            <Image style="width:100%;height:250px" src={`${APIPREFIX}api/wechat/${id}`} />
          </AtCurtain>
          <AtButton
            onClick={() => {
              changeQrCodeVisible(false);
            }}
          >
            右上关闭幕帘
          </AtButton>
        </View>
      ) : null}
    </BasicPage>
  );
};
