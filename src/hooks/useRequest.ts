import { useState, useEffect, useCallback, useRef, usePullDownRefresh } from '@tarojs/taro';
import events from '@/utils/eventBus';
import { PULL_DOWN_REFRESH_EVENT } from '@/constants';

function useRequest<T>(
  params: any,
  request: (params: any) => Promise<T | null>,
  defaultData: T
): { data: T | null; loadding: boolean; refresh: () => void } {
  const [currData, setData] = useState<T | null>(null);
  const [count, setCount] = useState(0);
  const [loadding, setLoadding] = useState(false);
  const pagePullDownRef = useRef('');

  useEffect(() => {
    setLoadding(true);
    request(params).then(data => {
      setLoadding(false);
      if (data) {
        setData(data);
      }
    });
  }, [count, params, request]);

  usePullDownRefresh(() => {
    refresh();
  });

  const refresh = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    events.on(PULL_DOWN_REFRESH_EVENT, (page: string) => {
      if (!pagePullDownRef.current) {
        pagePullDownRef.current = page;
      } else if (pagePullDownRef.current !== page) {
        return;
      }
      refresh();
    });
    return () => {
      events.off(PULL_DOWN_REFRESH_EVENT);
    };
  }, [refresh]);

  return { data: currData || defaultData, loadding, refresh };
}

export default useRequest;
