import { post, get, put } from '@/utils/request';
import { APIPREFIX } from '@/constants';

/**
 * 发起一个排序主题
 * @param data {title:'',total:''}
 */
export async function apply(data) {
  return post({
    url: `${APIPREFIX}api/sorter`,
    data,
  });
}

/**
 * 点击抽取号码
 * @param id 主键id
 */
export async function takeNumber(id) {
  return put({
    url: `${APIPREFIX}api/sorter/${id}`,
  });
}

/**
 * 查询该主题的信息以及人员列表信息
 * @param data {title:'',total:''}
 */
export async function getDetail(id) {
  return get({
    url: `${APIPREFIX}api/sorter/${id}`,
  });
}
