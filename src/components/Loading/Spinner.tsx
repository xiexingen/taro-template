import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './Spinner.scss'

export default class Detail extends Component<any> {
  render () {
    const {className}=this.props;
    return (
      <View className={`spinner ${className||''}`}>
        <View className="item item-animate item-1" />
        <View className="item item-animate item-2" />
        <View className="item item-animate item-3" />
      </View>
    )
  }
}
