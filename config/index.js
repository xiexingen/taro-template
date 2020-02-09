// eslint-disable-next-line import/no-commonjs
const path = require('path');

const config = {
  projectName: 'taro-template',
  date: '2019-08-09',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  babel: {
    sourceMap: true,
    presets: [
      [
        'env',
        {
          modules: false,
        },
      ],
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      [
        'transform-runtime',
        {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: 'babel-runtime',
        },
      ],
    ],
  },
  defineConstants: {},
  alias: {
    // '@': path.resolve(__dirname, '..', 'src'),
    // '@': 'src',
    '@': path.resolve(__dirname, '..', 'src'),
  },
  plugins: {
    babel: {
      sourceMap: true,
      presets: [['env', { modules: false }]],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread',
        [
          'transform-runtime',
          {
            helpers: false,
            polyfill: false,
            regenerator: true,
            moduleName: 'babel-runtime',
          },
        ],
      ],
    },
    typescript: {
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        baseUrl: '.',
        declaration: false,
        experimentalDecorators: true,
        jsx: 'preserve',
        jsxFactory: 'Nerv.createElement',
        module: 'commonjs',
        moduleResolution: 'node',
        noImplicitAny: false,
        noUnusedLocals: true,
        outDir: './dist/',
        preserveConstEnums: true,
        removeComments: false,
        rootDir: '.',
        sourceMap: true,
        strictNullChecks: true,
        target: 'es6',
      },
      include: ['src/**/*'],
      exclude: ['node_modules'],
      compileOnSave: false,
    },
  },
  // copy: {
  //   patterns: [{ from: 'src/custom-tab-bar/', to: 'dist/custom-tab-bar/' }],
  //   options: {},
  // },
  weapp: {
    module: {
      postcss: {
        cssModules: {
          enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'global', // 转换模式，取值为 global/module，下文详细说明
            generateScopedName: '[name]__[local]__[hash:base64:5]',
          },
        },
        autoprefixer: {
          enable: true,
        },
        url: {
          enable: true,
          limit: 102400,
        },
      },
    },
  },
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8'],
        },
      },
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 10240, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
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
        config: {
          browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8'],
        },
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
      esnextModules: ['taro-ui'],
    },
  },
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line global-require
    return merge({}, config, require('./dev'));
  }
  // eslint-disable-next-line global-require
  return merge({}, config, require('./prod'));
};
