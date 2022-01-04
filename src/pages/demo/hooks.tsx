import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Button } from '@tarojs/components';
import { useEnv, useModal, useToast } from 'taro-hooks';

const Index: React.FC<any> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const env = useEnv();
  const [showModal] = useModal({
    title: 'Taro Hooks',
    showCancel: false,
    confirmColor: '#8c2de9',
    confirmText: '支持一下',
    mask: true,
  });
  const [showToast] = useToast({ mask: true });

  const handleModal = useCallback(() => {
    showModal({
      content: '给个start',
    }).then(() => {
      dispatch({
        type: 'user/getInfo',
      });
      showToast({ title: '点击了确定' });
    });
  }, []);

  return (
    <View>
      <Text>{env}</Text>
      <Button onClick={handleModal}>modal</Button>
    </View>
  );
};

export default Index;
