let apiPreFix='https://emall-int.minichina.com.cn/minichina/api/';

let apiKey="SU5ULU1JTkklMjBWaXN1YWxpemVy";

if(process.env.NODE_ENV === 'production'){
    apiPreFix='https://emall.minichina.com.cn/minichina/api/';
    apiKey='UFJPRC1NSU5JJTIwVmlzdWFsaXplcg=='
}

export {apiPreFix,apiKey}