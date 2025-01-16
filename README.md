
# 项目简介

这是一个 Vue 3 模板项目。
2025-01-16 删除多余vue文件，新增 css 基础样式文件
## 技术栈
- Vue 3
- Vite
- TypeScript
- Vue Router
- Pinia
- ESLint

## 运行项目的方法

1. 安装依赖：
   ```sh
   npm install

2. 运行项目：
   ```sh
   npm run dev
3. 使用 ESLint 本项目使用 ESLint 进行代码质量检查。请确保在 VS Code 中安装 ESLint 插件以获得最佳的开发体验。
    安装完成后，VS Code 将自动根据项目中的 ESLint 配置文件进行代码检查和修复。
   ```sh
   npm run lint

## 文件夹结构
```plaintext
src/                    # 源码
  ├── assets/           # 静态资源会编译进 `dist`，引入时使用相对路径
  ├── components/       # 全局组件集合
  ├── router/           # 路由配置
  ├── store/            # 状态管理
  ├── views/            # 页面集合使用单文件组件, 按菜单结构划分
  |   ├── clientManagement/
  |   |  ├── clientList/
  |   |  |  ├── components/
  |   |  |  |  ├── MyComponents1.vue
  |   |  |  |  └── MyComponents2.vue
  |   |  |  └── IndexView.vue
  |   |  ├── clientDetail/
  |   |  |  ├── IndexView.vue
  |   |  ├── clientRequest/
  |   |  |  ├── IndexView.vue
  |   |  ├── staffRequest/
  |   |  |  ├── IndexView.vue
  |   |  ├── tradeAccountList/
  |   |  |  ├── IndexView.vue
  ├── App.vue           # 根组件
  ├── main.ts           # 入口文件
  └── index.html        # 入口 HTML 文件
```
## 开发规范
   - 请使用 ESLint 进行代码质量检查。
   - 命名
      - 组件名：使用大驼峰命名法，如：`MyComponent`
      - 文件命名：使用小驼峰命名法，如：`myComponent.ts`


