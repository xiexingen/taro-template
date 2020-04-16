import { post, get } from '@/utils/request';
import { APIPREFIX } from '@/constants';

export async function login(data) {
  return post({
    url: `${APIPREFIX}api/auth`,
    data,
  });
}

export async function getUser(code) {
  return get(`${APIPREFIX}api/auth/${code}`);
}
