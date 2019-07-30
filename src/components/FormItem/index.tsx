import Taro, { Component } from '@tarojs/taro';
import { View, Text, Label } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './index.scss';

const arrowType = ['left', 'right', 'up', 'down'];

class FormItem extends Component<any,any> {
    static defaultProps = {
        title: null,
        required: false,
        error: false,
        labelWidth: 145,
        info: null,
        hasBorder: true,
    };

  showInfo = () => {
    const { info, error } = this.props;
    if (error === true && info !== null) {
      Taro.atMessage({
        message: info,
        type: 'error',
      });
    }
  };

  render() {
    const { hasBorder, title, labelWidth, required, arrow, error } = this.props;

    return (
      <View
        className={`formItem ${hasBorder === true ? '' : 'noBorder'}`}
        hoverClass={arrowType.indexOf(arrow) !== -1 ? 'active' : ''}
      >
        <View className={'form-item-ct'}>
          <Label
            className={'label'}
            style={{
              width: `${labelWidth}rpx`,
            }}
          >
            {title}
            <Text
              className={'required'}
              style={{ color: required === true ? '#df0000' : 'transparent' }}
            >
              *
            </Text>
          </Label>
          <View className={'item'}>{this.props.children}</View>
          <View className={'error'} onClick={this.showInfo}>
            {error === true && <AtIcon color="#FF4949" value="alert-circle" size="16" />}
          </View>
          {arrowType.indexOf(arrow) !== -1 && (
            <View className={'arrow'}>
              <AtIcon color="#999" value={`chevron-${arrow}`} size="16" />
            </View>
          )}
        </View>
      </View>
    );
  }
}
export default FormItem;
