let apiPreFix='https://emall-int.minichina.com.cn/minichina/api/';

if(process.env.NODE_ENV === 'production'){
    apiPreFix='https://emall.minichina.com.cn/minichina/api/';
}

export {apiPreFix}
