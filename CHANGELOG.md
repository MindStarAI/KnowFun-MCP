# Changelog

All notable changes to this project will be documented in this file.

## [1.0.1] - 2026-03-01

### 📚 Documentation

**Added bilingual documentation (中英文文档)**
- English versions of all main documentation
  - `README.en.md` - Complete project documentation
  - `QUICKSTART.en.md` - Quick start guide
  - `USAGE_EXAMPLES.en.md` - Usage examples
- `CONFIGURATION.md` - Comprehensive bilingual configuration guide
  - Claude Desktop setup instructions
  - Claude Code CLI setup instructions
  - Cursor setup instructions (3 methods)
  - Configuration tips and troubleshooting
- `DOCS_INDEX.md` - Centralized documentation index

**Configuration examples**
- `claude-code-config.example.json` - Claude Code configuration template
- `cursor-config.example.json` - Cursor configuration template
- Updated `claude_desktop_config.example.json` with metadata

**Enhanced Chinese documentation**
- Updated `README.md` with links to Claude Code and Cursor configs
- Updated `QUICKSTART.md` with multi-tool setup options
- Added navigation links between all documentation files

### 🔧 Improvements
- Better documentation organization and discoverability
- Clearer setup instructions for different tools
- More comprehensive troubleshooting guides

---

## [1.0.0] - 2026-03-01

### 🎉 Initial Release

#### ✨ Features

- **MCP Server Implementation**
  - 完整的 Model Context Protocol (MCP) server 实现
  - 支持 stdio 传输协议
  - TypeScript 编写，类型安全

- **API 工具集（9个工具）**
  - `create_task` - 创建内容生成任务（课程/海报/游戏/短剧）
  - `get_task` - 根据 taskId 查询任务状态
  - `get_task_by_request_id` - 根据 requestId 查询任务
  - `get_task_detail` - 获取任务详细结果
  - `list_tasks` - 获取任务列表（支持分页和筛选）
  - `get_credits_balance` - 查询积分余额
  - `get_credits_pricing` - 获取积分定价
  - `get_schema` - 获取 API 配置 Schema
  - `get_usage` - 查询积分消耗明细

- **内容生成类型**
  - 📚 Course - 多媒体课程生成
  - 🎨 Poster - 知识图解海报生成
  - 🎮 Game - 互动游戏生成
  - 🎬 Film - 短剧/微电影生成

- **开发工具**
  - `npm test` - API 连接测试脚本
  - `npm run watch` - 自动编译监听
  - TypeScript 声明文件生成

#### 📚 Documentation

- `README.md` - 完整项目文档
- `QUICKSTART.md` - 5分钟快速入门指南
- `USAGE_EXAMPLES.md` - 详细使用示例和场景
- `PROJECT_STRUCTURE.md` - 项目结构说明
- `claude_desktop_config.example.json` - Claude Desktop 配置示例

#### 🔧 Technical Details

- **Dependencies**
  - @modelcontextprotocol/sdk: ^1.0.4
  - axios: ^1.7.9
  - dotenv: ^16.4.7

- **Dev Dependencies**
  - typescript: ^5.7.3
  - @types/node: ^22.10.5

- **API Endpoints**
  - Base URL: `https://api.knowfun.io`
  - API Path: `/api/openapi/v1/*`
  - Authentication: Bearer Token (API Key)

#### ✅ Testing

- API 连接测试通过
- 积分查询功能验证
- Schema 获取功能验证
- 任务列表查询验证

#### 🌟 Highlights

- **类型安全** - 完整的 TypeScript 类型定义
- **错误处理** - 详细的错误信息和状态码处理
- **易于集成** - 与 Claude Desktop 无缝集成
- **文档完善** - 从快速入门到高级用法的完整文档
- **开箱即用** - 配置简单，5分钟即可开始使用

---

## API 端点变更记录

### v1.0.0
- 所有 API 端点使用 `/api/openapi/v1/` 前缀
- 正确的路由路径配置（修复初始的 404 错误）

---

## 未来计划

### v1.1.0（计划中）
- [ ] 添加任务状态轮询工具
- [ ] 支持批量任务创建
- [ ] 添加资源下载功能
- [ ] 实现 Webhook 回调支持

### v1.2.0（计划中）
- [ ] 添加任务模板管理
- [ ] 支持任务优先级设置
- [ ] 实现积分预算管理
- [ ] 添加任务统计分析

---

## 贡献者

- 初始开发：2026-03-01

## 许可证

MIT License
