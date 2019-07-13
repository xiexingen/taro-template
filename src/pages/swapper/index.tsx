import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem } from '@tarojs/components'
import withShare from '@/components/withShare';
import './index.scss';

@withShare()
export default class Index extends Taro.Component<any, any> {
    config = {
        navigationBarTitleText: 'Taro UI'
    }
    render() {
        return (
            <Swiper
                className="swiper-container"
                vertical={true}
                circular={true}
                duration={600}
            >
                <SwiperItem>
                    <View className='swiper-item demo-text-1'>1</View>
                </SwiperItem>
                <SwiperItem>
                    <View className='swiper-item demo-text-2'>2</View>
                </SwiperItem>
                <SwiperItem>
                    <View className='swiper-item demo-text-3'>3</View>
                </SwiperItem>
            </Swiper>
        )
    }
}
