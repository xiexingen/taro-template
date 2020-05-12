# 基于taro+dva+taro-ui+typescript的多端开发框架

## 目录

- [开始学习](#开始学习)
  - [前期工作准备](#前期工作准备)

## 开始学习

#### 前期工作准备

cli 工具安装:

```h
# 使用 npm 安装 cli
$ npm install -g @tarojs/cli

# OR 使用 yarn 安装 cli
$ yarn global add @tarojs/cli

# OR 安装了 cnpm，使用 cnpm 安装 cli
$ cnpm install -g @tarojs/cli
```

#### 项目结构说明
- `config`: 项目配置文件
- `scripts`: 项目的模板文件(组件、页面模板会根据里面的模板来生成，可根据需要自行定制)
- `docs`: 文档
- `mock`: 本地mock
- `src`: 源码文件
    - `assets`: 一些静态资源，比如：font、images、iconfont、scss等
    - `components`: 项目编写的一些共用组件
    - `models`: 项目dva插件model函数的引用或者是一些共用的js文件
    - `pages`: 项目的页面，核心页面(如果分包的话)
    - `services`: 项目中的基础服务方法
    - `types`: 项目公共的Typescript类型声明
    - `utils`: 辅助方法、基础组件、请求库等
    - `app.tsx`: 入口文件
    - `constants.tsx`: 项目中的常量
    - `dva.tsx`: dva相关的代码

#### 项目启动

运行小程序编译命令

`yarn dev:weapp`

等待项目编译完成，会在项目根目录下生成一个`dist`,打开微信小程序开发者根据，导入本地刚刚生成的`dist`文件，就成功启动了项目。

***

## 环境
- 安装node
- 安装taro-cli

~~~
npm install -g @tarojs/cli

- update
taro update self // 更新tarocli
taro update project // 在项目下运行，用于升级项目
~~~

## 便程功能

##### 快速生成页面
~~~
yarn page '[路径/]文件名'

example
1. yarn page order
2. yarn page sales/order
~~~

## 项目编译和预览
- clone项目
- 使用npm或者taro 编译
- 使用对应的开发工具(如：微信开发者工具)，选择编译后的dist文件夹进行预览；或者直接预览(如：H5)

#### 微信小程序
~~~
# yarn
$ yarn dev:weapp
$ yarn build:weapp
~~~

#### H5
~~~
# yarn
$ yarn dev:h5
$ yarn build:h5
~~~
  
#### 支付宝小程序
~~~
# yarn
$ yarn dev:alipay
~~~

#### React Native
~~~
# yarn
$ yarn dev:rn
~~~

***

>项目详细配置如下

微信小程序的开发目前是很热的一个领域，有很多的开发模式，找到一种属于自己的方法才会使得开发顺心顺利。

此架构是使用 Taro + dva + typescript 构建前端开发
- 京东凹凸实验室的React框架Taro很成熟，又是大厂在维护更新迭代，不用担心没人维护的问题，他有自己的UI还有物料社区，比起原生小程序方便很多，支持多端，一处代码，多处运行，微信小程序、H5、百度小程序、支付宝小程序、字节跳动小程序、QQ轻应用、快应用、ReactNative；
- 数据管理是Redux集成的dva框架，是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，dva 还额外内置了 react-router 和 fetch，所以也可以理解为一个轻量级的应用框架；
- TypeScript就是所谓的JavaScript超集。它不是JavaScript的替代品，也不会为JavaScript代码添加任何新功能。相反，TypeScript允许程序员在其代码中使用面向对象的构造，然后将其转换为JavaScript。它还包括类型安全和编译时类型检查等便利功能。

<!--more-->

> 资料

[Taro官网地址：https://taro.aotu.io/](https://taro.aotu.io/)  
[Taro-UI官网地址：https://taro-ui.aotu.io/](https://taro-ui.aotu.io/#/docs/introduction)  
[dva官网地址：https://dvajs.com/guide/](https://dvajs.com/guide/)


## 本地MOCK


## TODO List

- [√] scss模块化
- [ ] 使用字体图标
- [ ] 本地化mock支持
- [ ] lint、prettier支持
- [ ] 通用组件完善
  - [ ] 海报组件
  - [ ] 自定义头部
  - ~~[√] 分享组件~~
- [ ] 分包加载



如有啥问题欢迎讨论，共同学习。

项目示例Github地址：[https://github.com/xiexingen/taro-template](https://github.com/xiexingen/taro-template)