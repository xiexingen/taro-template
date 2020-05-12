import { useRef, usePullDownRefresh } from '@tarojs/taro';

import events from '@/utils/eventBus';
import { PULL_DOWN_REFRESH_EVENT } from '../constants';
import { getUniqueId } from '@/utils';

function usePullDownRefreshEvent() {
  const pageRef = useRef(getUniqueId());
  usePullDownRefresh(() => {
    events.trigger(PULL_DOWN_REFRESH_EVENT, pageRef.current);
  });

  return null;
}

export default usePullDownRefreshEvent;
