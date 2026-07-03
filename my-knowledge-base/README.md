# 我的知识库

使用 VitePress 搭建的个人知识管理系统。

## 本地运行

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run docs:dev

# 3. 访问 http://localhost:5173
```

## 构建部署

```bash
# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 项目结构

```
my-knowledge-base/
├── docs/
│   ├── .vitepress/
│   │   └── config.ts        # 配置文件
│   ├── index.md             # 首页
│   ├── guide/               # 指南
│   │   ├── index.md
│   │   └── getting-started.md
│   └── notes/               # 学习笔记
│       ├── index.md
│       ├── machine-learning.md
│       └── deep-learning.md
├── package.json
└── README.md
```

## 添加新内容

1. 在 `docs` 目录下创建新的 `.md` 文件
2. 编辑 `docs/.vitepress/config.ts` 更新导航和侧边栏
3. 推送到 GitHub，Vercel 会自动部署

## 部署到 Vercel

1. 将代码推送到 GitHub
2. 登录 [Vercel](https://vercel.com)
3. 点击 "New Project" 导入你的仓库
4. 设置：
   - **Framework Preset**: VitePress
   - **Build Command**: `npm run docs:build`
   - **Output Directory**: `docs/.vitepress/dist`
5. 点击 "Deploy"

部署完成后，你会得到一个 `https://你的项目名.vercel.app` 的网址。
