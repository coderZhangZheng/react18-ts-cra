# React18+TS+CRA 在线考勤系统

## 第 19 章项目创建和初始化

```
npx create-react-app@latest react18-ts-cra --template typescript
npm install axios sass antd @ant-design/icons react-router-dom redux react-redux redux-persist @reduxjs/toolkit
封装axios(utils/http.ts最底层的封装)
全局样式和图片(assets静态资源在index.tsx中引入，其中还涉及项目title和icon和字体图标，css重置样式-公用样式-自定义样式)
集成路由和对应页面(配置路由表和页面，创建router和views和components文件夹，meta路由元信息和路由守卫，lazy和Suspense)
package.json中设置端口并测试路由功能  SET PORT=8080
集成redux状态管理(配置redux,react-redux,redux-persist,@reduxjs/toolkit)(创建store文件夹)
```

## 第 20 章登录页和首页布局-组件拆分-登出-动态面包屑

```
字体图标：iconfont.cn
表单组件：<Form>
npm install classnames lodash  @types/lodash


```

## 第 21 章打卡签到页与异常考勤页业务开发

```
描述列表数据交互
日历数据交互
联动更新
在线签到功能
异常考勤处理
重点：后台数据返回后前端如何进行统计计算，同时结合响应数据如何存储和恢复使用
```

## 第 22 章添加审批页和我的审批页业务开发

```
<Table/>
分页处理数据
条件筛选数据
添加数据与联动
消息提醒功能
重点：日常业务功能
```

## 第 23 章总结

```
TS
Vue和React对比
useState
- 初始值只会在第一次生效，之后的每次re-render会重新产生上下文，值为最新的值
- 初始值如果是对象更新时不会自动合并对象，而setState会自动合并对象
- 更新对象或数组时，只有引用地址发生变化，才会重新执行FC
- 初始值是惰性的，如果有复杂的运算逻辑为了避免不必要的计算，useState中使用函数
- setState和useState更新值都是异步的，但是useState中是无法立即拿到更新后的值的
- useState更新数据后拿到更新后值，1借助useEffect,2借助setNum(()=>{}),3借助useRef
- 多次setNum(num++)首先是异步的，其次内部最终更新值会合并,只执行最后一次
- 多次setNum(()=>num++)首先是异步的，其次内部最终更新值会依次执行
```

//-----------------------------------------------------------------------------------------

# 该项目基于 coderwhy 的 React18+TS 网易云音乐网站项目，只有视频没有源码所以只能提取核心知识记录总结

## 通过这个项目能学到什么

- 学习使用 craco 方式实现 cra 项目 webpack 的配置
- 通过该项目学会 Sass 平台类项目的搭建，包括多级路由等核心知识
-
