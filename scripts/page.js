/**
 * pages 页面快速生成脚本
 * yarn page '文件名‘
 * example yarn page order/index
 */
const fs = require('fs');
// 获取用户输入的路径
const inputPath=process.argv[2];

let pageName=inputPath;// 文件名
let pagePath=''; // 路径
// 如果路径中带/ 则解析出路径以及组件名
if(inputPath.indexOf('/')!==-1){
    var lastSplitIndex=inputPath.lastIndexOf("/");
    pagePath=str.substr(0,lastSplitIndex);
    pageName=str.substr(lastSplitIndex+1);
}

const componentName = pageName.substring(0, 1).toUpperCase() + pageName.substring(1);

if (!pageName) {
    console.log('文件名不能为空');
    console.log('用法1：yarn page order/index');
    process.exit(0);
}

// 页面模板构建
const pageTemplate = `
import Taro, { Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components'
import { PureComponent } from '@/utils/BaseComponent'

import { ${componentName}Props, ${componentName}State } from './${pageName}.interface'
import styles from './${pageName}.module.scss'
// import {  } from '../../components'

@connect(({ ${pageName} }) => ({
    ...${pageName},
}))
class ${componentName} extends PureComponent<${componentName}Props,${componentName}State > {

    config:Config = {
        // navigationBarTitleText: '页面标题'
    }

    constructor(props: ${componentName}Props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <View className={styles.container}>
                页面内容
            </View>
        )
    }
}
export default ${componentName}
`

// scss 模板
const scssTemplate = `
@import "@/assets/scss/theme";

.container{

}
`


// model 模板
const modelTemplate = `
import extend from '@/utils/model';
import * as ${pageName}Api from './service';

export default extend({
    namespace: '${pageName}',
    state: {
        
    }
});
`

// 属性模板
const interfaceTemplate = `
/**
 * ${pageName}.state 参数类型
 *
 * @export
 * @interface ${componentName}State
 */
export interface ${componentName}State {

}

/**
 * ${pageName}.props 参数类型
 *
 * @export
 * @interface ${componentName}Props
 */
export interface ${componentName}Props {

}
`

fs.mkdirSync(`./src/pages/${pagePath?pagePath+'/':''}${pageName}`); // mkdir $1
process.chdir(`./src/pages/${pagePath?pagePath+'/':''}${pageName}`); // cd $1

fs.writeFileSync(`${pageName}.tsx`, pageTemplate); //tsx
fs.writeFileSync(`${pageName}.scss`, scssTemplate); // scss
fs.writeFileSync('service.ts', serviceTemplate); // service
fs.writeFileSync('model.ts', modelTemplate); // model
fs.writeFileSync(`${pageName}.interface.ts`, interfaceTemplate); // interface
process.exit(0);