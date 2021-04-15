module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  mini: {},
  h5: {
    esnextModules: ["taro-ui"],
    // devServer: {
    //   port: 3000,
    //   proxy: {
    //     '/api/': {
    //       target: 'localhost:3000',
    //       pathRewrite: {
    //         '^/api/': '/',
    //       },
    //       changeOrigin: true,
    //     },
    //     '/api-m/': {
    //       target: '',
    //       pathRewrite: {
    //         '^/api-m/': '/',
    //       },
    //       changeOrigin: true,
    //     },
    //   },
    // },
  },
};
