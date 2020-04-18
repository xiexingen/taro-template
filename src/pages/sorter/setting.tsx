import Taro, { useEffect, useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtForm, AtInput, AtButton } from 'taro-ui';
import BasicPage from '@/components/BasicPage';
import { useOnceTempData } from '@/hooks';
import { apply } from './services/sort';
import styles from './setting.scss';

interface IModel {
  title: string;
  total: string;
}

export default () => {
  const [cacheModel, setCacheModel] = useOnceTempData<IModel>({
    title: '',
    total: '',
  });
  const [loading, setLoading] = useState(false);

  const [model, setModel] = useState<IModel>(cacheModel);

  useEffect(() => {
    Taro.setNavigationBarTitle({
      title: '排顺序',
    });
  }, []);

  const handleChange = (name, value) => {
    setModel({
      ...model,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (!model.title) {
      return tipValidation('请输入排序主题!');
    }
    if (!model.total) {
      return tipValidation('请输入总人数!');
    }

    if (
      setCacheModel({
        data: model,
        url: '/pages/login/index?redirect=/pages/sorter/setting',
      })
    ) {
      setLoading(true);
      apply({
        ...model,
        total: Number(model.total),
      }).then(id => {
        Taro.navigateTo({
          url: `/pages/sorter/index?id=${id}`,
        });
      });
    }
  };

  const tipValidation = title => {
    Taro.showToast({
      title,
      icon: 'none',
    });
    return false;
  };

  return (
    <BasicPage loading={loading}>
      <View className={`${styles.title} at-article__p`}>
        <View className={styles.flag}>排顺序</View>
        输入排序主题并选择总人数， 发布后邀请好友参加，用户参与时会被随机分配顺序号码。
      </View>
      <AtForm>
        <AtInput
          name="title"
          autoFocus
          title="排序主题"
          type="text"
          maxLength={18}
          clear
          placeholder="如:刘德华演唱会座位号抽取"
          value={model.title}
          onChange={handleChange.bind(null, 'title')}
        />

        <AtInput
          name="total"
          title="总人数"
          type="number"
          placeholder="如 100"
          value={model.total}
          onChange={handleChange.bind(null, 'total')}
        />
      </AtForm>
      <AtButton className={styles.submit} type="primary" onClick={handleSubmit}>
        发起排序
      </AtButton>
    </BasicPage>
  );
};
