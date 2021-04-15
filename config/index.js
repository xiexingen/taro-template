import { resolve } from 'path';

const config = {
  projectName: 'taro-template',
  date: '2021-4-15',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  alias: {
    // '@/': resolve(__dirname, '..', 'src/'),
    '@/assets': resolve(__dirname, '..', 'src/assets'),
    '@/actions': resolve(__dirname, '..', 'src/actions'),
    '@/components': resolve(__dirname, '..', 'src/components'),
    '@/constants': resolve(__dirname, '..', 'src/constants'),
    '@/hooks': resolve(__dirname, '..', 'src/hooks'),
    '@/pages': resolve(__dirname, '..', 'src/pages'),
    '@/reducers': resolve(__dirname, '..', 'src/reducers'),
    '@/services': resolve(__dirname, '..', 'src/services'),
    '@/store': resolve(__dirname, '..', 'src/store'),
    '@/utils': resolve(__dirname, '..', 'src/utils'),
  },
  plugins: [],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  // 小程序端
  weapp: {
    module: {
      postcss: {
        cssModules: {
          enable: true,
          config: {
            namingPattern: 'module',
            generateScopedName: '[name]__[local]___[hash:base64:5]',
          },
        },
      },
    },
  },
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
