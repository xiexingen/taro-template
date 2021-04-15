import React from 'react';
import Taro, { useDidShow, useRouter } from '@tarojs/taro';
import { View, Image, Button } from '@tarojs/components';
import AuthImage from '@/assets/images/pages/icon_wechat_auth.png';
import globalData, { setUser } from '@/globalData';
import { queryToString } from '@/utils';
import { login } from '@/services/user';
import styles from './index.module.scss';

export default () => {
  const router = useRouter();

  useDidShow(async () => {
    await checkLogin();
  });

  const checkLogin = () => {
    const userInfo = globalData.user;
    if (userInfo) {
      const { tab = '/pages/home/index', redirect } = router.params;
      const query = queryToString(router.params, ['tab', 'redirect']);
      if (redirect) {
        Taro.redirectTo({
          url: `${redirect}${query}`,
        });
      } else {
        Taro.switchTab({
          url: tab,
        });
      }
    }
  };

  const onGetUserInfo = async e => {
    const { detail } = e;
    if (detail.errMsg.endsWith('ok')) {
      const userInfo = JSON.parse(detail.rawData);
      const { nickName, gender, avatarUrl } = userInfo;
      const { code, errMsg } = await Taro.login();
      if (errMsg !== 'login:ok') {
        Taro.showToast({
          title: errMsg,
          icon: 'none',
        });
      }
      login({
        nickName,
        gender,
        avatarUrl,
        code,
      }).then(result => {
        result && setUser(result);
        checkLogin();
      });
    }
  };

  return (
    <View className={styles.mask}>
      <View className={styles['modal-content']}>
        <Image src={AuthImage} className={styles['auth-img']} />
        <View className={styles.tips}>请求获得你的头像和昵称用来注册</View>
        <Button
          className={styles['auth-btn']}
          openType='getUserInfo'
          onGetUserInfo={onGetUserInfo}>
          一键授权
        </Button>
      </View>
    </View>
  );
};
