import Taro, { Component } from '@tarojs/taro'
import { AtNavBar } from 'taro-ui';
import {pop,hasHistory,navigateToWithFail} from '@/utils/navigate'


interface StatusBarProps {
    showBack?: boolean;
    title?:string;
}

export default class Index extends Component<StatusBarProps, any> {
    static defaultProps = {
        showBack: true,
        title:'新一季MINI CLUBMAN上市'
    }
    state = {
        statusBarHeight: Taro.getSystemInfoSync().statusBarHeight
    }

    handleBack=()=>{
        if(hasHistory()){
            const url=pop();
            navigateToWithFail({
                url
            },true)
        }
    }

    render() {
        const { showBack,title } = this.props;
        const affixProps:any={};
        if(showBack){
            if(hasHistory()){
                affixProps.leftIconType='chevron-left';
            }
        }
        return (
            <AtNavBar
                customStyle={{ paddingTop: `${this.state.statusBarHeight}px` }}
                onClickLeftIcon={this.handleBack}
                fixed={true}
                title={title}
                {...affixProps}
            />
        )
    }
}