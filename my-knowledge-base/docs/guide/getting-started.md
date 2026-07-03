# 快速开始

## 本地运行

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run docs:dev
```

访问 `http://localhost:5173` 查看效果。

### 3. 构建生产版本

```bash
npm run docs:build
```

构建产物在 `docs/.vitepress/dist` 目录。

## 添加新内容

### 创建新页面

在 `docs` 目录下创建 `.md` 文件：

```
docs/
├── notes/
│   ├── index.md        # 分类首页
│   └── new-topic.md    # 新主题
```

### 更新导航

编辑 `docs/.vitepress/config.ts`，在 `sidebar` 中添加新页面链接。

## Markdown 语法示例

### 标题

```markdown
# 一级标题
## 二级标题
### 三级标题
```

### 列表

```markdown
- 无序列表项 1
- 无序列表项 2

1. 有序列表项 1
2. 有序列表项 2
```

### 代码块

```python
def hello():
    print("Hello, World!")
```

### 表格

| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 内容1 | 内容2 | 内容3 |

### 数学公式

行内公式：$E = mc^2$

块级公式：

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$
