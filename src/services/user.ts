import { post } from '@/utils/request';
import { APIPREFIX } from '@/constants';

export async function login(data) {
  return post({
    url: `${APIPREFIX}token/TokenAuth/WechatLogin`,
    data,
  });
}
