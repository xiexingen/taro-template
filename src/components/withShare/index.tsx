import Taro from '@tarojs/taro';
// import { connect } from '@tarojs/redux';
import defaultShareImg from '@/assets/images/logo.png';

export interface IShareProps {
  title?: string;
  imgUrl?: string;
  path?: string;
}

function withShare(opts: IShareProps={title:'车展小程序',imgUrl:defaultShareImg,path:'pages/index/index'}):any {
  // opts.title = opts.title || '车展小程序';
  // opts.imgUrl = opts.imgUrl || defaultShareImg;
  // opts.path = opts.path || 'pages/index/index';
  return function demoComponent(WrapComponent) {
    // redux里面的用户数据
    // @connect(({ user }) => ({
    //   userInfo: user.userInfo
    // }))
    class WithShare extends WrapComponent {
      componentWillMount() {
        Taro.showShareMenu({
          withShareTicket: true
        });
        if (super.componentWillMount) {
          super.componentWillMount();
        }
      }

      // 点击分享的那一刻会进行调用
      onShareAppMessage() {
        // const { userInfo } = this.props;

        let { title, imgUrl, path = null } = opts;

        // 从继承的组件获取配置
        if (this.$setSharePath && typeof this.$setSharePath === 'function') {
          path = this.$setSharePath();
        }

        // 从继承的组件获取配置
        if (this.$setShareTitle && typeof this.$setShareTitle === 'function') {
          title = this.$setShareTitle();
        }

        // 从继承的组件获取配置
        if (
          this.$setShareImageUrl &&
          typeof this.$setShareImageUrl === 'function'
        ) {
          imgUrl = this.$setShareImageUrl();
        }

        // 每条分享都补充用户的分享id
        // 如果path不带参数，分享出去后解析的params里面会带一个{''： ''}
        // const sharePath = `${path}&shareFromUser=${userInfo.shareId}`; 

        return {
          title,
          path,
          imageUrl: imgUrl
        };
      }

      render() {
        return super.render();
      }
    }

    return WithShare;
  };
}

export default withShare;