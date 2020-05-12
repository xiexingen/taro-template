import { del } from '@/utils/request';
import { APIPREFIX } from '@/constants';

/**
 * 获取我申请的
 */
export async function getMyApply() {
  return del({
    url: `${APIPREFIX}api/sorter/1`,
  });
}

/**
 * 获取我申参加的
 */
export async function getMyJoin() {
  return del({
    url: `${APIPREFIX}api/sorter/2`,
  });
}
