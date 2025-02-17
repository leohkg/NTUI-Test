
# 项目简介

这是一个 Vue 3 模板项目。
- 2025-01-16 删除多余vue文件，新增 css 基础样式文件
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

## 目录结构
   - **按功能分组**：将组件按功能分组存放在文件夹中。例如，将所有用户相关的组件放在/components/user/文件夹中。
   - **保持简洁**：尽量保持目录结构的简洁性，不要嵌套太多层
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
   1. **请使用 ESLint 进行代码质量检查。**
   2. **命名**
      - **组件命名**
         - **单词拼写**：使用完整的单词，不要使用缩写（除非缩写是公认的）如: 使用NavigationBar而不是NavBar
         - **PascalCase**：如：`MyComponent`
      - **文件命名**：使用小驼峰命名法，如：`myComponent.ts`
      - **变量和方法命名**
         - **camelCase**：如：`myVariable`、`myFunction()`
         - **动词开头**：如：`getUserData、fetchPosts`
      - **样式命名**
         - **BEM**：如：`.block__element--modifier`
      - **路由命名**
         - **kebab-case**：如：`/my-route`
      - **常量命名**
         - **全大写加下划线**：如：`MY_CONSTANT`
   3. **其他注意事项**
      - **避免魔法数字**: 使用有意义的变量名代替魔法数字。如：`const MAX_COUNT = 10;`
      - **注释**：为复杂的逻辑添加注释，解释代码的意图。


