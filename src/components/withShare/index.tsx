import Taro from '@tarojs/taro';
// import { connect } from '@tarojs/redux';
import defaultLogo from '@/assets/images/logo.png';

export interface IShareProps {
  title?: string;
  imgUrl?: string;
  path?: string;
}

export const DEFAULT_SHAREPROPS: IShareProps = {
  title: 'Taro-Template',
  imgUrl: defaultLogo,
  path: 'pages/index/index',
};

const Index = (opts: IShareProps = DEFAULT_SHAREPROPS): any => WrapComponent => {
  class WithShare extends WrapComponent {
    componentWillMount() {
      Taro.showShareMenu({
        withShareTicket: true,
      });
    }

    // 点击分享的那一刻会进行调用
    onShareAppMessage() {
      // const { userInfo } = this.props;

      let {
        title = DEFAULT_SHAREPROPS.title,
        imgUrl = DEFAULT_SHAREPROPS.imgUrl,
        path = DEFAULT_SHAREPROPS.path,
      } = opts;

      // 从继承的组件获取配置
      if (this.$setSharePath && typeof this.$setSharePath === 'function') {
        path = this.$setSharePath();
      }

      // 从继承的组件获取配置
      if (this.$setShareTitle && typeof this.$setShareTitle === 'function') {
        title = this.$setShareTitle();
      }

      // 从继承的组件获取配置
      if (this.$setShareImageUrl && typeof this.$setShareImageUrl === 'function') {
        imgUrl = this.$setShareImageUrl();
      }

      // 每条分享都补充用户的分享id
      // 如果path不带参数，分享出去后解析的params里面会带一个{''： ''}
      // const sharePath = `${path}&shareFromUser=${userInfo.shareId}`;
      return {
        title,
        path,
        imageUrl: imgUrl,
      };
    }

    render() {
      return <WrapComponent />;
    }
  }

  return WithShare;
};

export default Index;
