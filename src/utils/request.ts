import Taro from '@tarojs/taro';
// import { pageToLogin } from '@/utils';
import {apiKey} from '@/constants'

// const customInterceptor = chain => {
//   const requestParams = chain.requestParams;

//   return chain.proceed(requestParams).then(res => {
//     if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
//       return Promise.reject('请求资源不存在');
//     } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
//       return Promise.reject('服务端出现了问题');
//     } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
//       Taro.setStorageSync('Authorization', '');
//       pageToLogin();
//       // TODO 根据自身业务修改
//       return Promise.reject('没有权限访问');
//     } else if (res.statusCode === HTTP_STATUS.AUTHENTICATE) {
//       Taro.setStorageSync('Authorization', '');
//       pageToLogin();
//       return Promise.reject('需要鉴权');
//     } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
//       return res.data;
//     }
//   });
// };
// const interceptors = [customInterceptor, Taro.interceptors.logInterceptor];
// interceptors.forEach(i => Taro.addInterceptor(i))

export const HTTP_STATUS = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

interface IRequest{
    url:string;
    data?:any
}

function request<TInput = any>(opt: Taro.request.Param<TInput>): Promise<any>  {
    const option = {
      ...opt,
      header: {
        // 'Authorization': Taro.getStorageSync('Authorization'),
        ...opt.header
      }
    };

    return new Promise((resolve, reject) => {
      Taro.request({
        ...option,
        header: {
          'MINI-API-KEY':apiKey,
          'Content-Type':'application/json'
        },
      }).then((result) => {
        if(result.statusCode!==200){
          Taro.showToast({
            title: '网络异常',
            icon:'none'
          })
          reject('网络异常')
        }
        // TODO 后端api有问题 暂时先忽略状态判断
          const {results,errorMessage,apiStatus,APIStatus}=result.data;
          if(!errorMessage){ // apiStatus===1||APIStatus===1
            resolve(results)
          }
          else{
            Taro.showToast({
              title: errorMessage,
              icon:'none'
            })
            reject(result.data)
          }
        })
        .catch(error => {
          Taro.showToast({
            title: '网络异常',
            icon:'none'
          })
          reject(error);
        })
    })

    // return Taro.request<TOut,TInput>(option).then(result=>{
    //   return result.data['data'];
    // });
  }

  function get(opt:IRequest|string) {
      let option:IRequest;
      if(typeof opt ==="string"){
          option={
              url:opt as string
          }
      }else{
          option=opt as IRequest;
      }
    return request({
        ...option,
        method:'GET'
    });
  }

  function post(opt:IRequest) {
    return request({
        ...opt,
        method:'POST'
    })
  }

  function put(opt:IRequest) {
    return request({
        method:"PUT",
        ...opt
    })
  }

  function del(opt:IRequest) {
    return request({
        method:'DELETE',
        ...opt
    })
  }

  export default request;
  export {get,post,put,del}