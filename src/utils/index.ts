import Taro from '@tarojs/taro';

export const isH5 = Taro.getEnv() === Taro.ENV_TYPE.WEB;

export const isWechat = Taro.getEnv() === Taro.ENV_TYPE.WEAPP;

// 获取当前页url
export const getCurrentPageUrl = () => {
  const pages = Taro.getCurrentPages();
  const currentPage = pages[pages.length - 1];
  const url = currentPage.route;
  return url;
};

/**
 * 金额千分位格式化
 * @param str 要格式化的金额
 */
export const formatCurrency = (str: any) => {
  if (typeof str === 'undefined' || str === null) {
    return '';
  }
  return `${str}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const bytesToSize = (bytes: number | string): string => {
  bytes = +bytes;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 B';
  const i = parseInt(`${Math.floor(Math.log(bytes) / Math.log(1024))}`);
  return `${parseFloat((bytes / Math.pow(1024, i)).toFixed(2))} ${sizes[i]}`;
};

export const getUniqueId = () => {
  return Math.random()
    .toString(36)
    .substr(2);
};

/**
 * 对象转查询字符串 {redirect:'',id:''} ==> ?redirect=xxxx&id=1
 * @param query 对象
 * @param ignores 要忽略的键
 */
export const queryToString = (
  query: { [key: string]: string } | Partial<Record<string, string>>,
  ignores?: string[],
) => {
  const strQuery: string[] = [];
  for (const key in query) {
    if (query.hasOwnProperty(key)) {
      const pKey = encodeURIComponent(key);
      if (ignores && ignores.indexOf(pKey) !== -1) {
        continue;
      }
      strQuery.push(`${pKey}=${encodeURIComponent(query[key])}`);
    }
  }
  if (strQuery.length > 0) {
    return `?${strQuery.join('&')}`;
  }
  return '';
};

/**
 * 查询字符串转对象 ?redirect=xxxx&id=1 ==>{redirect:'',id:''}
 */
export const stringToQuery = (url: string) => {
  const result: any = {};
  if (url.indexOf('?') !== -1) {
    const queryArray = url.split('?')[1].split('&');
    for (const i in queryArray) {
      const pars = queryArray[i].split('=');
      result[decodeURIComponent(pars[0])] = decodeURIComponent(pars[1]);
    }
  }

  return result;
};

// export const base64Encode=(str)=>{
//   var c1, c2, c3;
//   var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//   var i = 0, len = str.length, strin = '';
//   while (i < len) {
//       c1 = str.charCodeAt(i++) & 0xff;
//       if (i == len) {
//           strin += base64EncodeChars.charAt(c1 >> 2);
//           strin += base64EncodeChars.charAt((c1 & 0x3) << 4);
//           strin += "==";
//           break;
//       }
//       c2 = str.charCodeAt(i++);
//       if (i == len) {
//           strin += base64EncodeChars.charAt(c1 >> 2);
//           strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
//           strin += base64EncodeChars.charAt((c2 & 0xF) << 2);
//           strin += "=";
//           break;
//       }
//       c3 = str.charCodeAt(i++);
//       strin += base64EncodeChars.charAt(c1 >> 2);
//       strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
//       strin += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
//       strin += base64EncodeChars.charAt(c3 & 0x3F)
//   }
//   return strin
// }

// function base64_decode (input) { // 解码，配合decodeURIComponent使用
//   var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//   var output = "";
//   var chr1, chr2, chr3;
//   var enc1, enc2, enc3, enc4;
//   var i = 0;
//   input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
//   while (i < input.length) {
//       enc1 = base64EncodeChars.indexOf(input.charAt(i++));
//       enc2 = base64EncodeChars.indexOf(input.charAt(i++));
//       enc3 = base64EncodeChars.indexOf(input.charAt(i++));
//       enc4 = base64EncodeChars.indexOf(input.charAt(i++));
//       chr1 = (enc1 << 2) | (enc2 >> 4);
//       chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
//       chr3 = ((enc3 & 3) << 6) | enc4;
//       output = output + String.fromCharCode(chr1);
//       if (enc3 != 64) {
//           output = output + String.fromCharCode(chr2);
//       }
//       if (enc4 != 64) {
//           output = output + String.fromCharCode(chr3);
//       }
//   }
//   return utf8_decode(output);
// }

// function utf8_decode (utftext) { // utf-8解码
//   var string = '';
//   let i = 0;
//   let c = 0;
//   let c1 = 0;
//   let c2 = 0;
//   while (i < utftext.length) {
//       c = utftext.charCodeAt(i);
//       if (c < 128) {
//           string += String.fromCharCode(c);
//           i++;
//       } else if ((c > 191) && (c < 224)) {
//           c1 = utftext.charCodeAt(i + 1);
//           string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
//           i += 2;
//       } else {
//           c1 = utftext.charCodeAt(i + 1);
//           c2 = utftext.charCodeAt(i + 2);
//           string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
//           i += 3;
//       }
//   }
//   return string;
// }
