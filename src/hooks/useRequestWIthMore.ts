/* eslint-disable react-hooks/rules-of-hooks */
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useReachBottom,
  usePullDownRefresh,
} from '@tarojs/taro';
import { REACH_BOTTOM_EVENT, PULL_DOWN_REFRESH_EVENT } from '../constants';
import events from '@/utils/eventBus';

function useRequestWIthMore<T, S = string>(
  data: S,
  request: (data: S, params: any | null) => Promise<T[] | null>
): [T[] | null, boolean, () => void, () => void] | [] {
  if (!data) {
    // bug?
    console.warn('useRequestWIthMore: no data');
    return [];
  }

  const [currData, setData] = useState<T[] | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [params, setParams] = useState({ page: 1, per_page: 10 });
  // 存储唯一 id 用于匹配消息
  const pageReachBottomRef = useRef('');
  const pagePullDownRef = useRef('');
  const loadingRef = useRef(false);

  useEffect(() => {
    if (hasMore) {
      loadingRef.current = true;
      request(data, params)
        .then(result => {
          if (result) {
            if (currData) {
              setData([...currData, ...result]);
            } else {
              setData(result);
            }
            if (result.length < params.per_page!) {
              setHasMore(false);
            }
          }
        })
        .finally(() => {
          loadingRef.current = false;
          Taro.stopPullDownRefresh();
          Taro.hideLoading();
        });
    }
  }, [currData, data, hasMore, params, request]);

  usePullDownRefresh(() => {
    refresh();
  });

  useEffect(() => {
    events.on(REACH_BOTTOM_EVENT, (page: string) => {
      if (loadingRef.current) {
        return;
      }
      if (!pageReachBottomRef.current) {
        pageReachBottomRef.current = page;
      } else if (pageReachBottomRef.current !== page) {
        return;
      }
      getMoreData();
    });
    return () => {
      events.off(REACH_BOTTOM_EVENT);
    };
  }, []);

  const refresh = useCallback(() => {
    setData(null);
    setHasMore(true);
    setParams({ ...params, page: 1 });
  }, [params]);

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

  useReachBottom(() => {
    if (loadingRef.current) {
      return;
    }
    getMoreData();
  });

  const getMoreData = () => {
    setParams(paraData => ({ ...paraData, page: paraData.page! + 1 }));
  };

  return [currData, hasMore, refresh, getMoreData];
}

export default useRequestWIthMore;
