import Taro, { Component, Config } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import globalData, { setUser } from '@/globalData';
import Index from '@/pages/home';
import { getUser } from '@/services/user';
import configStore from './store';
import { DEFAULT_SHAREPROPS } from '@/components/withShare';
import './app.global.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
  onShareAppMessage(): Taro.ShareAppMessageReturn {
    return { ...DEFAULT_SHAREPROPS };
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/sorter/index',
      'pages/home/index',
      'pages/user/index',
      'pages/sorter/setting',
      'pages/index/index',
      'pages/login/index',
    ],
    // subPackages: [
    //   {
    //     root: 'pagesAccount',
    //     name: 'pagesAccount',
    //     pages: ['pages/login/index'],
    //     // independent: true
    //   },
    // ],
    // preloadRule:{
    //   'pages/index':{
    //     network: 'all',
    //     packages: ['pagesAccount']
    //   }
    // },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'taro-template',
      navigationBarTextStyle: 'black',
      // enablePullDownRefresh: true,
    },
    tabBar: {
      list: [
        {
          pagePath: 'pages/home/index',
          text: '玩法',
          iconPath: 'assets/images/tabs/record.png',
          selectedIconPath: 'assets/images/tabs/record-active.png',
        },
        {
          pagePath: 'pages/user/index',
          text: '我的',
          iconPath: 'assets/images/tabs/about.png',
          selectedIconPath: 'assets/images/tabs/about-active.png',
        },
      ],
      color: '#a9b7b7',
      selectedColor: '#FFC701',
      borderStyle: 'black',
      backgroundColor: '#ffffff',
    },
    // permission: {
    //   'scope.userInfo': {
    //     desc: '你的个人信息将用于小程序信息接口的效果展示',
    //   },
    // },
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
    !globalData.extraData && (globalData.extraData = {});
    if (referrerInfo && referrerInfo['extraData']) {
      globalData.extraData = referrerInfo['extraData'];
    }
    // 获取设备信息
    const sys = await Taro.getSystemInfoSync();
    sys && (globalData.systemInfo = sys);
    if (!globalData.user) {
      const { code, errMsg } = await Taro.login();
      if (errMsg !== 'login:ok') {
        Taro.showToast({
          title: errMsg,
          icon: 'none',
        });
      }
      getUser(code).then(result => {
        result && setUser(result);
      });
    }
  }

  update = () => {
    if (process.env.TARO_ENV === 'weapp') {
      const updateManager = Taro.getUpdateManager();
      Taro.getUpdateManager().onUpdateReady(function() {
        Taro.showModal({
          title: '更新提示',
          content: '新版本已经准备好，是否重启应用？',
          success: res => {
            if (res.confirm) {
              // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
              updateManager.applyUpdate();
            }
          },
        });
      });
    }
  };
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));
