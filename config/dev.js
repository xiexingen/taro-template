// eslint-disable-next-line import/no-commonjs
module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {
    // HOST: isH5 ? '"/api"' : HOST,
    // HOST_M: isH5 ? '"/api-m"' : HOST_M,
  },
  weapp: {},
  mini: {},
  h5: {
    esnextModules: ['taro-ui'],
    devServer: {
      port: 3000,
      proxy: {
        '/api/': {
          target: 'localhost:3000',
          pathRewrite: {
            '^/api/': '/',
          },
          changeOrigin: true,
        },
        '/api-m/': {
          target: '',
          pathRewrite: {
            '^/api-m/': '/',
          },
          changeOrigin: true,
        },
      },
    },
  },
};
