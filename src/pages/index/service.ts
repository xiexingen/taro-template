import { get, post } from '@/utils/request';
import { apiPreFix } from '@/services/config';

export async function getList(data): Promise<any> {
  return get({
    url: `${apiPreFix}me/getList`,
    data,
  });
}

export async function create(data): Promise<any> {
  return post({
    url: `${apiPreFix}me/create`,
    data,
  });
}
