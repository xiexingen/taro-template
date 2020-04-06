import Taro from '@tarojs/taro';
import interceptors from './interceptors';

interceptors.forEach(i => Taro.addInterceptor(i));

interface IRequest {
  url: string;
  data?: any;
}

function request<TInput = any, TOut = any>(opt: Taro.RequestParams): Promise<any> {
  const option = {
    ...opt,
    header: {
      // 'Authorization': Taro.getStorageSync('Authorization'),
      ...opt.header,
    },
  };

  return Taro.request<TOut, TInput>(option);
}

function get(opt: IRequest | string) {
  let option: IRequest;
  if (typeof opt === 'string') {
    option = {
      url: opt as string,
    };
  } else {
    option = opt as IRequest;
  }
  return request({
    ...option,
    method: 'GET',
  });
}

function post(opt: IRequest) {
  return request({
    ...opt,
    method: 'POST',
  });
}

function put(opt: IRequest) {
  return request({
    method: 'PUT',
    ...opt,
  });
}

function del(opt: IRequest) {
  return request({
    method: 'DELETE',
    ...opt,
  });
}

export default request;
export { get, post, put, del };
