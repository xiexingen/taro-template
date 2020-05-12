/**
 * pages 页面快速生成脚本
 * yarn page '文件名‘
 * example yarn page order/index
 */
const fs = require('fs');
// 获取用户输入的路径
const inputPath = process.argv[2];

let pageName = inputPath; // 文件名
let pagePath = ''; // 路径
// 如果路径中带/ 则解析出路径以及组件名
const modelNamespace = inputPath.replace('/', '_');
if (inputPath.indexOf('/') !== -1) {
  var lastSplitIndex = inputPath.lastIndexOf('/');
  pagePath = inputPath.substr(0, lastSplitIndex);
  pageName = inputPath.substr(lastSplitIndex + 1);
}

const componentName = pageName.substring(0, 1).toUpperCase() + pageName.substring(1);

if (!pageName) {
  console.log('文件名不能为空');
  console.log('用法1：yarn component order');
  console.log('用法2：yarn component order/popup');
  process.exit(0);
}

// 页面模板构建
const pageTemplate = `import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { PureComponent } from '@/utils/BaseComponent'

import { ${componentName}Props, ${componentName}State } from './${pageName}.interface'
import styles from './${pageName}.scss'

class ${componentName} extends PureComponent<${componentName}Props,${componentName}State> {
    static options = {
       addGlobalClass: true
    }
    
    static defaultProps = {
      className: '',
      customStyle: {}
    }

    render() {
        const { className, customStyle } = this.props
        return (
            <View 
               className={\`$\{styles.container\} $\{className\}\`}
               style={customStyle}
            >
            组件
            </View>
        )
    }
}
export default ${componentName};
`;

// scss 模板
const scssTemplate = `@import "@/assets/scss/theme";

.container{

}
`;

// 属性模板
const interfaceTemplate = `import { IPureComponentProps } from '@/utils/BaseComponent'
/**
 * ${pageName} state 参数类型
 */
export interface ${componentName}State {

}

/**
 * ${pageName} props 参数类型
 */
export interface ${componentName}Props extends IPureComponentProps{
    className?:string;
    customStyle?:{ [key:string]:string }
}
`;

fs.mkdirSync(`./src/components/${pagePath ? pagePath + '/' : ''}${componentName}`, {
  recursive: true,
}); // mkdir $1
process.chdir(`./src/components/${pagePath ? pagePath + '/' : ''}${componentName}`); // cd $1

fs.writeFileSync(`index.tsx`, pageTemplate); //tsx
fs.writeFileSync(`index.scss`, scssTemplate); // scss
fs.writeFileSync(`${pageName}.interface.ts`, interfaceTemplate); // interface
process.exit(0);
