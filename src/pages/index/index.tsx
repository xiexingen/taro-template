import Taro, { Config } from '@tarojs/taro'
// import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components'
import {PureComponent} from '@/utils/BaseComponent'
import styles from './index.module.scss'

// @connect(({  }) => ({

// }))
export default class Index extends PureComponent<any,any> {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className={styles.index}>
        Hello world!
      </View>
    )
  }
}
