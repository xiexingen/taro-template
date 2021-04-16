import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './app.scss';

import configStore from './store';

const store = configStore();

class App extends Component {
  componentDidMount() {}

  // 在小程序环境中对应 app 的 onLaunch。
  onLaunch() {
    // 在此生命周期中通过访问 options 参数或调用 getCurrentInstance().router，可以访问到程序初始化参数
  }

  // 程序要打开的页面不存在时触发
  onPageNotFound() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
