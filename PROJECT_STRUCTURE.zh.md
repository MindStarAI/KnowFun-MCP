# Knowfun MCP 项目结构

## 📁 文件说明

### 核心文件

| 文件 | 说明 |
|------|------|
| `src/index.ts` | MCP Server 主程序（TypeScript 源码） |
| `dist/index.js` | 编译后的 JavaScript 代码（由 TypeScript 生成） |
| `package.json` | Node.js 项目配置文件 |
| `tsconfig.json` | TypeScript 编译配置 |

### 配置文件

| 文件 | 说明 |
|------|------|
| `.env.example` | 环境变量模板（需复制为 `.env` 并填入真实配置） |
| `.env` | 实际环境变量文件（包含 API Key，不会提交到 Git） |
| `.gitignore` | Git 忽略规则 |
| `claude_desktop_config.example.json` | Claude Desktop 配置示例 |

### 文档文件

| 文件 | 说明 | 推荐阅读顺序 |
|------|------|-------------|
| `README.md` / `README.zh.md` | 项目说明文档（英文/中文） | ⭐ 1️⃣ 首先阅读 |
| `QUICKSTART.md` / `QUICKSTART.zh.md` | 5分钟快速入门指南（英文/中文） | ⭐ 2️⃣ 快速上手 |
| `USAGE_EXAMPLES.md` / `USAGE_EXAMPLES.zh.md` | 详细使用示例和场景（英文/中文） | 3️⃣ 深入学习 |
| `PROJECT_STRUCTURE.md` / `PROJECT_STRUCTURE.zh.md` | 项目结构说明（英文/中文，本文件） | 4️⃣ 了解结构 |

### 工具脚本

| 文件 | 说明 | 使用方法 |
|------|------|---------|
| `test-connection.js` | API 连接测试脚本 | `npm test` |

## 🗂️ 目录结构

```
knowfun-mcp/
├── src/                          # TypeScript 源代码
│   └── index.ts                  # MCP Server 主程序
│
├── dist/                         # 编译输出目录
│   ├── index.js                  # 编译后的主程序
│   └── index.d.ts                # TypeScript 类型定义
│
├── node_modules/                 # NPM 依赖包（自动生成）
│
├── .env.example                  # 环境变量模板
├── .gitignore                    # Git 忽略配置
├── package.json                  # 项目配置
├── package-lock.json             # 依赖锁定文件
├── tsconfig.json                 # TypeScript 配置
├── test-connection.js            # 连接测试脚本
├── claude_desktop_config.example.json  # Claude Desktop 配置示例
│
├── README.md                     # 主文档（英文）
├── README.zh.md                  # 主文档（中文）
├── QUICKSTART.md                 # 快速入门（英文）
├── QUICKSTART.zh.md              # 快速入门（中文）
├── USAGE_EXAMPLES.md             # 使用示例（英文）
├── USAGE_EXAMPLES.zh.md          # 使用示例（中文）
├── PROJECT_STRUCTURE.md          # 项目结构（英文）
└── PROJECT_STRUCTURE.zh.md       # 项目结构（中文，本文件）
```

## 🔧 主要技术组件

### 依赖包

#### 生产依赖
- `@modelcontextprotocol/sdk`: MCP 协议 SDK
- `axios`: HTTP 客户端（用于调用 Knowfun API）
- `dotenv`: 环境变量管理

#### 开发依赖
- `typescript`: TypeScript 编译器
- `@types/node`: Node.js 类型定义

## 🚀 工作流程

### 开发流程
1. 编辑 `src/index.ts` 源代码
2. 运行 `npm run build` 编译
3. 使用 `npm test` 测试连接
4. 在 Claude Desktop 中验证功能

### 监听模式（开发时推荐）
```bash
# 终端 1：监听文件变化并自动编译
npm run watch

# 终端 2：修改代码后重启 Claude Desktop 测试
```

## 📦 构建产物

运行 `npm run build` 后，会在 `dist/` 目录生成：
- `index.js` - 可执行的 JavaScript 文件
- `index.d.ts` - TypeScript 类型声明文件

## 🔑 环境变量

| 变量名 | 说明 | 必需 | 默认值 |
|--------|------|------|--------|
| `KNOWFUN_API_KEY` | Knowfun API Key | ✅ 是 | 无 |
| `KNOWFUN_API_BASE_URL` | API 基础 URL | ❌ 否 | `https://api.knowfun.io` |

## 🛠️ NPM 脚本

| 命令 | 说明 |
|------|------|
| `npm install` | 安装依赖 |
| `npm run build` | 编译 TypeScript |
| `npm run watch` | 监听文件变化并自动编译 |
| `npm start` | 直接运行（需先编译） |
| `npm run dev` | 编译并运行 |
| `npm test` | 测试 API 连接 |

## 🔍 代码架构

### KnowfunClient 类
封装所有 Knowfun API 调用：
- `createTask()` - 创建任务
- `getTask()` - 查询任务状态
- `getTaskDetail()` - 获取任务详情
- `listTasks()` - 获取任务列表
- `getCreditsBalance()` - 查询积分
- `getCreditsPricing()` - 查询定价
- `getSchema()` - 获取配置 Schema
- `getUsage()` - 查询使用明细

### MCP Server 设置
1. **ListToolsRequestSchema Handler** - 注册所有可用工具
2. **CallToolRequestSchema Handler** - 处理工具调用
3. **StdioServerTransport** - 使用标准输入输出通信

## 🔗 MCP 工具列表

| 工具名称 | 对应 API | 说明 |
|---------|---------|------|
| `create_task` | POST /openapi/v1/tasks | 创建生成任务 |
| `get_task` | GET /openapi/v1/tasks/:taskId | 查询任务状态 |
| `get_task_by_request_id` | GET /openapi/v1/tasks/by-request/:requestId | 按 requestId 查询 |
| `get_task_detail` | GET /openapi/v1/tasks/:taskId/detail | 获取详细结果 |
| `list_tasks` | GET /openapi/v1/tasks | 获取任务列表 |
| `get_credits_balance` | GET /openapi/v1/credits/balance | 查询积分余额 |
| `get_credits_pricing` | GET /openapi/v1/credits/pricing | 获取定价信息 |
| `get_schema` | GET /openapi/v1/schema | 获取配置 Schema |
| `get_usage` | GET /openapi/usage | 查询消耗明细 |

## 📝 修改建议

### 添加新工具
1. 在 `KnowfunClient` 类中添加新方法
2. 在 `ListToolsRequestSchema` handler 中注册工具
3. 在 `CallToolRequestSchema` handler 中添加处理逻辑
4. 重新编译：`npm run build`

### 修改 API 端点
编辑 `.env` 文件中的 `KNOWFUN_API_BASE_URL`

### 调试技巧
- 查看 Claude Desktop 日志（macOS: `~/Library/Logs/Claude/`)
- 使用 `console.error()` 输出调试信息到 stderr
- 运行 `npm test` 验证 API 连接

## 🎯 下一步开发建议

1. **错误处理增强**：添加更详细的错误信息和重试逻辑
2. **缓存机制**：缓存 Schema 和定价信息，减少 API 调用
3. **Webhook 支持**：实现任务完成通知机制
4. **批量操作**：支持批量创建和查询任务
5. **资源管理**：实现资源（视频、图片）的下载和管理功能

## 📚 相关资源

- [MCP 官方文档](https://modelcontextprotocol.io/)
- [Knowfun API 文档](https://knowfun.io/api-platform)
- [TypeScript 文档](https://www.typescriptlang.org/)
- [Axios 文档](https://axios-http.com/)
