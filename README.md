### vs-luck
> 基于Taro next的一套小程序项目

1. 启动微信小程序
    ```javascript
    yarn install
    or
    npm i

    npm run dev:weapp
    ```

2. 项目特性

   - Taro [文档](https://taro-docs.jd.com/taro/docs/README/index.html)
   - Typescript [文档](https://www.tslang.cn/docs/home.html)
   - Mobx+Mobx-react [文档](https://cn.mobx.js.org/)
   - Axios [文档](https://github.com/axios/axios)
   - Linaria [文档](https://linaria.now.sh/)

3. 项目结构

   ```javascript
   | config  // 配置文件

   | src

       |__ assets      // 静态资源

       |__ components  // 组件

       |__ utils     // 工具方法

       |__ store      // 状态

       |__ style		// 样式

       |__ pages		// 页面视图

   ```
4. 打包部署
    ```javascript
    npm run build:weapp
    ```