# Lvan-UI

> 作者：lvan
>
> CSDN 账号：[找不到bug的猿](https://blog.csdn.net/l508742729)
>
> githup 项目地址：[https://github.com/lvan521/LvanUI](https://github.com/lvan521/LvanUI)
>
> 码云 项目地址：[https://gitee.com/xf727/lvan-ui](https://gitee.com/xf727/lvan-ui)
>
> 特别提醒：本项目仅作为模仿练习 [ElementPlus](https://element-plus.gitee.io/#/zh-CN/component/installation) 的vue组件封装参考，不用于任何商业性质活动。
>
>最终解释权归作者本人所有。



#### LvanUI组件使用：
##### 1.安装 LvanUI

```javascript
npm install lvan-ui --save
```

##### 2. 全局引入

```javascript
// 引入组件
import LvanUI form 'lvan-ui'
// 引入样式
import 'lvan-ui/dist/lvan-ui.css'
 
const app = createApp(App)
// 注册组件
app.use(LvanUI)

```

#### 该仓库代码使用配置：
##### 1.项目配置-下载相关依赖

```
npm install
```

##### 2.项目运行：
```
npm run serve
```

##### 目录说明
```javascript
-lvan-ui
  |——public
  |——src
    |——examples // 组件示例相关页面
      |——assets // 静态资源文件 （字体图标、img、css、js...）
      |——router // 路由配置
      |——store // vuex配置
      |——until // 工具类
      |——App.vue // 主页面
      |——main.ts // 项目入口
    |——packages // 组件库
```

##### 打包：
```
npm run build
```

##### 组件库打包：
```
npm run lib
```

##### Lints and fixes files
```
npm run lint
```

##### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



