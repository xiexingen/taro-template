import Taro,{Component} from '@tarojs/taro'
// import { connect } from '@tarojs/redux';
import { View, CoverView } from "@tarojs/components";
import './index.scss'

export interface ITabMenuProps {
    selected: number;
}
const Index=(opts: ITabMenuProps):any=>(WrapComponent:any) =>{
    opts.selected = opts.selected || -1;
    class Decorator extends Component<any,any,any> {
        state = {
            color: "#7A7E83",
            selectedColor: "#3cc51f",
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
                    pagePath: "/pages/car/index",
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
            Taro.switchTab({ url })
            this.setState({
                selected: data.index
            })
        }

        render() {
            const { selectedColor, color, list } = this.state;
            const { selected } = opts;
            return (
                <View className="page">
                    <View className="doc-body">
                       <WrapComponent />
                    </View>
                    <CoverView className='tab-bar'>
                        <CoverView className="tab-bar-border" />
                        {
                            list.map(item => {
                                return (
                                    <CoverView key={item.key} className="tab-bar-item" data-path={item.pagePath} onClick={this.switchTab} >
                                        <CoverView style={{ color: selected === item.key ? selectedColor : color }}>{item.text}</CoverView>
                                    </CoverView>
                                )
                            })
                        }
                    </CoverView >
                </View>
            )
        }
    }
    return Decorator;
}

export default Index;