import Taro,{ Component } from "@tarojs/taro";
import { View,Text } from '@tarojs/components'
import { AtInput, AtButton } from "taro-ui";
import './index.scss';

interface ISelectProps{
    value:string;
    placeholder?:string;
    dataSource:Array<{key:string,text:string}>
    onChange:(key:string)=>void
}

export default class Index extends Component<ISelectProps,any> {
    static defaultProps ={
        dataSource:[],
        placeholder:'--请选择--'
    }
    state={
        selectShow:false
    }
    
    selectToggle=()=>{
        this.setState(preState=>{
            return{
                selectShow: !preState.selectShow
            }
        })
    }
    
    handleSelectItem=(e)=>{
        const { id } = e.currentTarget.dataset
        const {
            onChange
        }=this.props;
       
        onChange(id)

        this.setState({
            selectShow:false
        })
    }

    render() {
        const {value,dataSource,placeholder}=this.props;
        const selectedItem=dataSource.filter(m=>m.key===value)[0]||{};
        return (
            <View>
                <AtInput className="list-msg2" name='select' value={selectedItem.text} placeholder={placeholder} onFocus={this.selectToggle} onChange={(v)=>{console.log(v)}} >
                    <View className='at-icon at-icon-chevron-down' />
                </AtInput>
                {/* <View className='list-msg2' onClick={this.selectToggle}>
                    <Text>{selectedItem.text}</Text>
                    <View style={{display:'inline-block'}} className="at-icon at-icon-chevron-down" />
                </View> */}
                {
                    this.state.selectShow?(
                        <View className="select_box">
                            {dataSource.map(item=>{
                                return (
                                    <View className="select_one" data-id={item.key} key={item.key} onClick={this.handleSelectItem} >
                                        {item.text}
                                    </View>
                                )
                            })}
                        </View>
                    ):null
                }
            </View>
        )
    }
}