import React, { useMemo } from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { AtButton, AtInput, AtCalendar, AtDivider, AtProgress } from 'taro-ui';
import { View, Text } from '@tarojs/components';

import { add, minus, asyncAdd } from '@/actions/counter';

import styles from './index.module.scss';

type CounterProps = {
  num: number;
};

export default () => {
  const counter = useSelector<any, CounterProps>(state => state.counter);
  const dispatch = useDispatch();

  const memoizedDispatch = useMemo(() => {
    return {
      add: () => dispatch(add()),
      minus: () => dispatch(minus()),
      asyncAdd: () => dispatch(asyncAdd()),
    };
  }, [dispatch]);

  return (
    <View className={classnames(styles.index, 'body')}>
      <AtButton
        className={styles.margin}
        type='primary'
        onClick={memoizedDispatch.add}>
        +
      </AtButton>
      <AtButton
        className={styles.margin}
        type='primary'
        onClick={memoizedDispatch.minus}>
        -
      </AtButton>
      <AtButton
        className={styles.margin}
        type='primary'
        onClick={memoizedDispatch.asyncAdd}>
        async +
      </AtButton>
      <View className='t-center'>
        <Text>{counter.num}</Text>
      </View>
      <AtDivider content='输入框' />
      <View>
        <AtInput
          name='value'
          title='标准五个字'
          type='text'
          placeholder='标准五个字'
          onChange={value => {
            console.log(value);
          }}
        />
      </View>
      <AtDivider content='进度条' />
      <AtProgress percent={25} />
      <AtDivider content='日历' />
      <View>
        <AtCalendar currentDate='2021/04/11' />
      </View>
    </View>
  );
};
