 # AI Magic Box

AI Magic Box 是一个 AI 工具导航网站，帮助用户发现和比较最新、最创新的 AI 工具。

## 功能特点

- 🔍 智能搜索：快速查找 AI 工具
- 🏷️ 分类浏览：按类别浏览工具
- 🌓 暗色模式：支持浅色/深色主题切换
- 📱 响应式设计：完美适配各种设备
- 🎨 现代界面：流畅的动画和过渡效果
- 👤 用户系统：支持注册、登录和收藏（开发中）

## 技术栈

- **前端框架**: Next.js 14
- **样式方案**: Tailwind CSS
- **状态管理**: React Hooks
- **动画效果**: Framer Motion
- **UI 组件**: Headless UI
- **图标**: Heroicons

## 开发计划

### 已完成
- [x] 首页布局
- [x] 工具列表展示
- [x] 搜索组件
- [x] 响应式设计
- [x] 暗色模式

### 进行中
- [ ] 加载状态优化
- [ ] 页面过渡动画
- [ ] 暗色模式配色优化
- [ ] 移动端体验优化

### 待开发
- [ ] 用户认证系统
  - [ ] 注册/登录
  - [ ] 个人中心
  - [ ] 收藏功能
- [ ] 搜索功能后端 API
- [ ] 工具提交功能
- [ ] 评论系统

## 快速开始

1. 克隆项目
```bash
git clone https://gitee.com/akashicxing/aimagicbox.git
```

2. 安装依赖
```bash
cd aimagicbox/web
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 打开浏览器访问 http://localhost:3000

## 项目结构

```
web/
├── src/
│   ├── app/          # 页面文件
│   ├── components/   # 组件
│   ├── data/        # 静态数据
│   ├── lib/         # 工具函数
│   ├── styles/      # 样式文件
│   └── types/       # TypeScript 类型
├── public/          # 静态资源
└── scripts/         # 脚本工具
```

## 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 开源协议

本项目采用 MIT 协议 - 详见 [LICENSE](LICENSE) 文件