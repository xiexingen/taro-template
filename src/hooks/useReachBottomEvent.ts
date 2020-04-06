import { useRef, useReachBottom } from '@tarojs/taro';
import events from '@/utils/eventBus';
import { REACH_BOTTOM_EVENT, THROTTLE_DELAY } from '../constants';
import { getUniqueId } from '@/utils';

function useReachBottomEvent() {
  const pageRef = useRef(getUniqueId());
  const timerRef = useRef(0);

  useReachBottom(() => {
    const prev = timerRef.current;
    const curr = +Date.now();
    if (!prev || curr - prev > THROTTLE_DELAY) {
      events.trigger(REACH_BOTTOM_EVENT, pageRef.current);
      timerRef.current = curr;
    } else {
      console.log('wait...');
    }
  });

  return null;
}

export default useReachBottomEvent;
