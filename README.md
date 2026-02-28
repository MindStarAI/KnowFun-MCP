# Knowfun MCP Server

[![NPM Version](https://img.shields.io/npm/v/knowfun-mcp?style=flat-square)](https://www.npmjs.com/package/knowfun-mcp)
[![License](https://img.shields.io/npm/l/knowfun-mcp?style=flat-square)](LICENSE)
[![Node Version](https://img.shields.io/node/v/knowfun-mcp?style=flat-square)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square)](https://www.typescriptlang.org/)
[![MCP](https://img.shields.io/badge/MCP-1.0.4-green?style=flat-square)](https://modelcontextprotocol.io/)

中文 | [English](./README.en.md)

这是一个基于 [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) 的服务器，用于封装 Knowfun.io 的 OpenAPI，让 AI 助手（如 Claude）能够直接调用 Knowfun 的内容生成能力。

## 功能特性

通过此 MCP server，AI 助手可以：

- ✅ 创建内容生成任务（课程、海报、游戏、短剧）
- ✅ 查询任务状态和详细结果
- ✅ 获取任务列表（支持分页和筛选）
- ✅ 查询积分余额和消耗明细
- ✅ 获取 API 配置 Schema（所有可用的生成选项）

## 安装

```bash
# 克隆或进入项目目录
cd knowfun-mcp

# 安装依赖
npm install

# 编译 TypeScript
npm run build
```

## 配置

1. 复制环境变量模板：
```bash
cp .env.example .env
```

2. 编辑 `.env` 文件，填入您的 Knowfun API Key：
```bash
KNOWFUN_API_KEY=kf_your_api_key_here
KNOWFUN_API_BASE_URL=https://api.knowfun.io
```

> 💡 如何获取 API Key？
> 1. 登录 [knowfun.io](https://knowfun.io)
> 2. 进入 `/api-platform` 页面
> 3. 创建或查看您的 API Key

3. 测试连接（可选但推荐）：
```bash
npm test
```

如果配置正确，会显示：
- ✅ API Key 有效
- ✅ 网络连接正常
- ✅ 当前积分余额

## 使用配置

### 在 Claude Desktop 中使用

编辑 Claude Desktop 的配置文件：

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

添加以下配置：

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/Users/jamson/code/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "kf_your_api_key_here",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

重启 Claude Desktop 后，即可使用 Knowfun 工具。

### 在 Claude Code (CLI) 中使用

编辑或创建 `~/.config/claude/settings.json`：

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/Users/jamson/code/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "kf_your_api_key_here",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

然后正常使用 Claude Code CLI 即可。

### 在 Cursor 中使用

在项目根目录创建 `.cursor/mcp_config.json`：

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/Users/jamson/code/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "kf_your_api_key_here",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

或在 Cursor 设置中配置（Settings → Features → MCP）。

> 📖 查看 [CONFIGURATION.md](./CONFIGURATION.md) 获取详细配置指南

## 可用工具

### 1. create_task
创建内容生成任务（API: `POST /api/openapi/v1/tasks`）

**参数**：
- `requestId` (string, 必需): 自定义请求ID（1-64字符）
- `taskType` (string, 必需): 任务类型 - `course`（课程）, `poster`（海报）, `game`（游戏）, `film`（短剧）
- `material` (object, 必需): 输入素材
  - `text` (string): 文本内容
  - `url` (string): 文档或网页URL
  - `type` (string): 素材类型（text, url, pdf, doc等）
- `config` (object): 生成配置（可选，建议先调用 `get_schema` 查看可用配置）
- `callbackUrl` (string): 完成回调URL（可选）
- `language` (string): 语言设置（可选）

**示例**：
```json
{
  "requestId": "req-20260301-001",
  "taskType": "course",
  "material": {
    "text": "人工智能简介：AI是计算机科学的一个分支...",
    "type": "text"
  },
  "config": {
    "course": {
      "contentLanguage": "zh",
      "explainLanguage": "zh",
      "aspectRatio": "landscape"
    }
  }
}
```

### 2. get_task
根据 taskId 查询任务状态（API: `GET /api/openapi/v1/tasks/:taskId`）

**参数**：
- `taskId` (string, 必需): 任务ID

### 3. get_task_by_request_id
根据 requestId 查询任务状态（API: `GET /api/openapi/v1/tasks/by-request/:requestId`）

**参数**：
- `requestId` (string, 必需): 请求ID

### 4. get_task_detail
获取任务详细信息（API: `GET /api/openapi/v1/tasks/:taskId/detail`）

**参数**：
- `taskId` (string, 必需): 任务ID
- `verbose` (boolean): 是否返回详细调试信息（默认 false）

### 5. list_tasks
获取任务列表（API: `GET /api/openapi/v1/tasks`）

**参数**：
- `page` (number): 页码（默认 1）
- `limit` (number): 每页数量（默认 20）
- `status` (string): 状态筛选（pending, processing, success, failed）
- `taskType` (string): 类型筛选（course, poster, game, film）

### 6. get_credits_balance
查询当前 API Key 的积分余额（API: `GET /api/openapi/v1/credits/balance`）

**返回**：
- `available`: 可用积分
- `earned`: 总获得积分
- `used`: 已使用积分
- `locked`: 锁定积分

### 7. get_credits_pricing
获取各类任务的积分消耗定价（API: `GET /api/openapi/v1/credits/pricing`）

### 8. get_schema
获取 API 配置 Schema（API: `GET /api/openapi/v1/schema`）

包括所有可用的内容风格、模板、语言等选项

### 9. get_usage
查询积分消耗明细（API: `GET /api/openapi/usage`）

**参数**：
- `startDate` (string): 开始日期（YYYY-MM-DD）
- `endDate` (string): 结束日期（YYYY-MM-DD）

## 任务类型说明

### Course（课程）
生成多媒体课程内容（视频、PPT等）

**主要配置项**：
- `contentStyle`: 内容风格（concise、detailed等）
- `contentLanguage`: 内容语言
- `explainLanguage`: 解说语言
- `voiceType`: 音色类型
- `aspectRatio`: 宽高比（landscape、portrait）

### Poster（海报）
生成知识图解海报

**主要配置项**：
- `usage`: 布局类型（infographic、businessReports等）
- `style`: 美术风格（handDrawn、photorealistic等）
- `aspectRatio`: 宽高比（1:1、4:3、16:9等）

### Game（游戏）
生成互动游戏内容

**主要配置项**：
- `gameType`: 游戏类型（story、interactive、mission等）
- `aspectRatio`: 宽高比

### Film（短剧）
生成短视频或微电影

**主要配置项**：
- `filmStyle`: 影片风格（story、documentary、tutorial等）
- `aspectRatio`: 画面比例（16:9、9:16、1:1）

## 开发

```bash
# 监听文件变化并自动重新编译
npm run watch

# 运行开发模式
npm run dev
```

## 技术栈

- **MCP SDK**: @modelcontextprotocol/sdk
- **HTTP 客户端**: axios
- **语言**: TypeScript
- **运行时**: Node.js

## 文档

### 快速开始
- 🚀 [QUICKSTART.md](./QUICKSTART.md) - 快速入门指南
- 🚀 [QUICKSTART.en.md](./QUICKSTART.en.md) - Quick Start Guide

### 完整文档
- 📖 [README.md](./README.md) - 完整项目文档（中文）
- 📖 [README.en.md](./README.en.md) - Complete Documentation (English)
- 📝 [USAGE_EXAMPLES.md](./USAGE_EXAMPLES.md) - 使用示例
- 📝 [USAGE_EXAMPLES.en.md](./USAGE_EXAMPLES.en.md) - Usage Examples
- ⚙️ [CONFIGURATION.md](./CONFIGURATION.md) - 详细配置指南（中英文）

### 参考资料
- 📊 [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - 项目结构说明
- 📋 [CHANGELOG.md](./CHANGELOG.md) - 版本更新记录

### 贡献指南
- 🤝 [CONTRIBUTING.md](./CONTRIBUTING.md) - 如何贡献代码
- 📜 [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) - 社区行为准则
- 🔒 [SECURITY.md](./SECURITY.md) - 安全政策

## 相关链接

- [Knowfun.io](https://knowfun.io)
- [Knowfun OpenAPI 文档](https://knowfun.io/api-platform)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Claude Desktop](https://claude.ai/download)
- [Claude Code CLI](https://docs.anthropic.com/claude/docs/claude-code)
- [Cursor](https://cursor.sh)

## 许可证

MIT

## 支持

如有问题或建议，请联系 Knowfun 团队或提交 Issue。
