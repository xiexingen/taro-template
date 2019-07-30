import Taro, { Component } from '@tarojs/taro'
import { CoverView } from "@tarojs/components";
import {navigateToWithFail} from '@/utils/navigate'
import './index.scss'

interface ITabBarProps{
    activeed:number;
}

export default class Index extends Component<ITabBarProps,any> {
    static defaultProps={
        activeed:-1
    }
    state = {
        color: "#000",
        selectedColor: "#000",
        list: [
            {
                key: 1,
                pagePath: "/pages/index/index",
                text: "亮点",
            },
            {
                key: 2,
                pagePath: "/pages/car/index",
                text: "选配",

            },
            {
                key: 3,
                pagePath: "/pages/custom-order/form",
                text: "预约试驾",

            },
            {
                key: 4,
                pagePath: "/pages/car/index",
                text: "个人中心"
            }
        ]
    }

    switchTab(e) {
        const data = e.currentTarget.dataset
        const url = data.path
        navigateToWithFail({url})
    }

    render() {
        const { selectedColor, color, list } = this.state;
        const { activeed } = this.props;
        return (
            <CoverView className='tab-bar'>
                <CoverView className="tab-bar-border" />
                {
                    list.map(item => {
                        return (
                            <CoverView key={item.key} className="tab-bar-item" data-path={item.pagePath} onClick={this.switchTab} >
                                <CoverView style={{ color: activeed === item.key ? selectedColor : color }}>{item.text}</CoverView>
                            </CoverView>
                        )
                    })
                }
            </CoverView >
        )
    }
}
