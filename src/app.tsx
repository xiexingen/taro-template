import '@tarojs/async-await';
import Taro, { Component, Config } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import dva from '@/dva';
import { globalData } from '@/utils/global';
import models from '@/models';
import Index from '@/pages/index';
import './app.global.scss';

// h5开发环境开启调试模式
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
  // eslint-disable-next-line global-require
  require('nerv-devtools');
}

const dvaApp = dva.createApp({
  initialState: {},
  models,
  onError(e, dispatch) {
    // eslint-disable-next-line no-console
    console.error(e);
  },
});

global.__APP__ = dvaApp;

const store = dvaApp.getStore();

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: ['pages/index/index'],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#385ee8',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true,
    },
  };

  /**
   *
   *  1.小程序打开的参数 globalData.extraData.xx
   *  2.从二维码进入的参数 globalData.extraData.xx
   *  3.获取小程序的设备信息 globalData.systemInfo
   */
  async componentDidMount() {
    // 获取参数
    const { referrerInfo } = this.$router.params;
    const { query } = this.$router.params;
    !globalData.extraData && (globalData.extraData = {});
    if (referrerInfo && referrerInfo.extraData) {
      globalData.extraData = referrerInfo.extraData;
    }
    if (query) {
      globalData.extraData = {
        ...globalData.extraData,
      };
    }

    // 获取设备信息
    const sys = await Taro.getSystemInfoSync();
    sys && (globalData.systemInfo = sys);
  }

  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
