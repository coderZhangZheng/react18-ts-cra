```
npx create-react-app@latest react18-ts-cra --template typescript

npm install axios sass antd @ant-design/icons react-router-dom redux react-redux redux-persist @reduxjs/toolkit

封装axios(utils/http.ts最底层的封装)

全局样式和图片(assets静态资源在index.tsx中引入，其中还涉及项目title和icon和字体图标，css重置样式-公用样式-自定义样式)

集成路由和对应页面(配置路由表和页面，创建router和views和components文件夹，meta路由元信息和路由守卫，lazy和Suspense)

// 设置端口并测试路由    SET PORT:8080

集成redux状态管理(配置redux,react-redux,redux-persist,@reduxjs/toolkit)(创建store文件夹)
```

# 该项目基于 coderwhy 的 React18+TS 网易云音乐网站项目，只有视频没有源码所以只能提取核心知识记录总结

## 通过这个项目能学到什么

- 学习使用 craco 方式实现 cra 项目 webpack 的配置
- 通过该项目学会 Sass 平台类项目的搭建，包括多级路由等核心知识
-
