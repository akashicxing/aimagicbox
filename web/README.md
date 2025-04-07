# AI Magic Box Web

AI Magic Box 的 Web 前端项目。

## 开发环境设置

1. 安装依赖
```bash
npm install
```

2. 环境变量配置
- 复制 `.env.example` 为 `.env.local`
- 填入必要的环境变量

3. 开发
```bash
npm run dev
```

4. 构建
```bash
npm run build
```

## 项目结构

```
src/
├── app/              # Next.js 应用路由
├── components/       # React 组件
├── data/            # 静态数据
├── lib/             # 工具函数
├── styles/          # 样式文件
└── types/           # TypeScript 类型定义
```

## 开发指南

### 添加新工具
1. 在 `src/data/tools.json` 中添加工具信息
2. 运行 `npm run validate` 验证数据格式
3. 提交更改

### 样式指南
- 使用 Tailwind CSS 进行样式设计
- 遵循响应式设计原则
- 支持深色模式

### 组件开发
- 使用 TypeScript
- 确保组件是响应式的
- 添加适当的加载状态
- 处理错误情况

## 部署

项目使用 Cloudflare Pages 部署，构建输出目录为 `.next`。

### 环境变量
生产环境需要在 Cloudflare Pages 中配置以下环境变量：
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
