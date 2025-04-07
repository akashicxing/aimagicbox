# AI Magic Box

AI Magic Box 是一个帮助用户发现和使用最佳 AI 工具的平台。

## 本地开发

1. 克隆仓库
```bash
git clone git@github.com:akashicxing/aimagicbox.git
cd aimagicbox/web
```

2. 安装依赖
```bash
npm install
```

3. 配置环境变量
- 复制 `.env.example` 为 `.env.local`
- 填入以下必要的环境变量：
  ```
  NEXTAUTH_URL=http://localhost:3000
  NEXTAUTH_SECRET=你的密钥
  GOOGLE_CLIENT_ID=你的Google客户端ID
  GOOGLE_CLIENT_SECRET=你的Google客户端密钥
  ```

4. 启动开发服务器
```bash
npm run dev
```

## 部署

项目使用 Cloudflare Pages 部署，需要配置以下内容：

1. 构建设置
- 构建命令：`npm run build`
- 输出目录：`.next`
- Node.js 版本：18.x

2. 环境变量
- `NEXTAUTH_URL`: 生产环境域名
- `NEXTAUTH_SECRET`: 密钥
- `GOOGLE_CLIENT_ID`: Google OAuth 客户端 ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth 客户端密钥

## 技术栈

- Next.js 14
- React
- TypeScript
- Tailwind CSS
- NextAuth.js

## 功能特点

- 🔍 智能搜索：快速查找 AI 工具
- 🏷️ 分类浏览：按类别浏览工具
- 🌓 暗色模式：支持浅色/深色主题切换
- 📱 响应式设计：完美适配各种设备
- 🎨 现代界面：流畅的动画和过渡效果
- 👤 用户系统：支持注册、登录和收藏（开发中）

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