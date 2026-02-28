# Knowfun MCP Server

[![NPM Version](https://img.shields.io/npm/v/knowfun-mcp?style=flat-square)](https://www.npmjs.com/package/knowfun-mcp)
[![License](https://img.shields.io/npm/l/knowfun-mcp?style=flat-square)](LICENSE)
[![Node Version](https://img.shields.io/node/v/knowfun-mcp?style=flat-square)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square)](https://www.typescriptlang.org/)
[![MCP](https://img.shields.io/badge/MCP-1.0.4-green?style=flat-square)](https://modelcontextprotocol.io/)

[中文](./README.md) | English

This is a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that wraps the Knowfun.io OpenAPI, allowing AI assistants (like Claude) to directly invoke Knowfun's content generation capabilities.

## Features

Through this MCP server, AI assistants can:

- ✅ Create content generation tasks (courses, posters, games, films)
- ✅ Query task status and detailed results
- ✅ Get task lists (with pagination and filtering)
- ✅ Query credit balance and usage details
- ✅ Get API configuration schema (all available generation options)

## Installation

```bash
# Clone or navigate to project directory
cd knowfun-mcp

# Install dependencies
npm install

# Compile TypeScript
npm run build
```

## Configuration

1. Copy environment variable template:
```bash
cp .env.example .env
```

2. Edit `.env` file and fill in your Knowfun API Key:
```bash
KNOWFUN_API_KEY=kf_your_api_key_here
KNOWFUN_API_BASE_URL=https://api.knowfun.io
```

> 💡 How to get API Key?
> 1. Login to [knowfun.io](https://knowfun.io)
> 2. Go to `/api-platform` page
> 3. Create or view your API Key

3. Test connection (optional but recommended):
```bash
npm test
```

If configured correctly, it will show:
- ✅ API Key valid
- ✅ Network connection normal
- ✅ Current credit balance

## Use in Claude Desktop

Edit Claude Desktop configuration file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

Add the following configuration:

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

Restart Claude Desktop to use Knowfun tools.

## Use in Claude Code (CLI)

Create or edit `~/.config/claude/settings.json`:

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

Then use Claude Code CLI as normal.

## Use in Cursor

Create `.cursor/mcp_config.json` in your project:

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

Or configure in Cursor settings (Settings → Features → MCP).

## Available Tools

### 1. create_task
Create content generation task (API: `POST /api/openapi/v1/tasks`)

**Parameters**:
- `requestId` (string, required): Custom request ID (1-64 characters)
- `taskType` (string, required): Task type - `course`, `poster`, `game`, `film`
- `material` (object, required): Input material
  - `text` (string): Text content
  - `url` (string): Document or webpage URL
  - `type` (string): Material type (text, url, pdf, doc, etc.)
- `config` (object): Generation config (optional, call `get_schema` first to see available options)
- `callbackUrl` (string): Callback URL on completion (optional)
- `language` (string): Language setting (optional)

**Example**:
```json
{
  "requestId": "req-20260301-001",
  "taskType": "course",
  "material": {
    "text": "Introduction to AI: AI is a branch of computer science...",
    "type": "text"
  },
  "config": {
    "course": {
      "contentLanguage": "en",
      "explainLanguage": "en",
      "aspectRatio": "landscape"
    }
  }
}
```

### 2. get_task
Query task status by taskId (API: `GET /api/openapi/v1/tasks/:taskId`)

**Parameters**:
- `taskId` (string, required): Task ID

### 3. get_task_by_request_id
Query task status by requestId (API: `GET /api/openapi/v1/tasks/by-request/:requestId`)

**Parameters**:
- `requestId` (string, required): Request ID

### 4. get_task_detail
Get detailed task information (API: `GET /api/openapi/v1/tasks/:taskId/detail`)

**Parameters**:
- `taskId` (string, required): Task ID
- `verbose` (boolean): Return detailed debug info (default false)

### 5. list_tasks
Get task list (API: `GET /api/openapi/v1/tasks`)

**Parameters**:
- `page` (number): Page number (default 1)
- `limit` (number): Items per page (default 20)
- `status` (string): Status filter (pending, processing, success, failed)
- `taskType` (string): Type filter (course, poster, game, film)

### 6. get_credits_balance
Query current API Key credit balance (API: `GET /api/openapi/v1/credits/balance`)

**Returns**:
- `available`: Available credits
- `earned`: Total earned credits
- `used`: Used credits
- `locked`: Locked credits

### 7. get_credits_pricing
Get credit pricing for each task type (API: `GET /api/openapi/v1/credits/pricing`)

### 8. get_schema
Get API configuration schema (API: `GET /api/openapi/v1/schema`)

Includes all available content styles, templates, languages, etc.

### 9. get_usage
Query credit usage details (API: `GET /api/openapi/usage`)

**Parameters**:
- `startDate` (string): Start date (YYYY-MM-DD)
- `endDate` (string): End date (YYYY-MM-DD)

## Task Types

### Course
Generate multimedia course content (video, PPT, etc.)

**Main config**:
- `contentStyle`: Content style (concise, detailed, etc.)
- `contentLanguage`: Content language
- `explainLanguage`: Narration language
- `voiceType`: Voice type
- `aspectRatio`: Aspect ratio (landscape, portrait)

### Poster
Generate knowledge infographic posters

**Main config**:
- `usage`: Layout type (infographic, businessReports, etc.)
- `style`: Art style (handDrawn, photorealistic, etc.)
- `aspectRatio`: Aspect ratio (1:1, 4:3, 16:9, etc.)

### Game
Generate interactive game content

**Main config**:
- `gameType`: Game type (story, interactive, mission, etc.)
- `aspectRatio`: Aspect ratio

### Film
Generate short videos or micro-films

**Main config**:
- `filmStyle`: Film style (story, documentary, tutorial, etc.)
- `aspectRatio`: Aspect ratio (16:9, 9:16, 1:1)

## Development

```bash
# Watch file changes and auto-compile
npm run watch

# Run in development mode
npm run dev
```

## Tech Stack

- **MCP SDK**: @modelcontextprotocol/sdk
- **HTTP Client**: axios
- **Language**: TypeScript
- **Runtime**: Node.js

## Documentation

### Quick Start
- 🚀 [QUICKSTART.en.md](./QUICKSTART.en.md) - Quick Start Guide
- 🚀 [QUICKSTART.md](./QUICKSTART.md) - 快速入门指南

### Complete Documentation
- 📖 [README.en.md](./README.en.md) - Complete Documentation (English)
- 📖 [README.md](./README.md) - 完整项目文档（中文）
- 📝 [USAGE_EXAMPLES.en.md](./USAGE_EXAMPLES.en.md) - Usage Examples
- 📝 [USAGE_EXAMPLES.md](./USAGE_EXAMPLES.md) - 使用示例
- ⚙️ [CONFIGURATION.md](./CONFIGURATION.md) - Configuration Guide (Bilingual)

### Reference
- 📊 [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Project Structure
- 📋 [CHANGELOG.md](./CHANGELOG.md) - Version History

### Contributing
- 🤝 [CONTRIBUTING.md](./CONTRIBUTING.md) - How to Contribute
- 📜 [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) - Code of Conduct
- 🔒 [SECURITY.md](./SECURITY.md) - Security Policy

## Related Links

- [Knowfun.io](https://knowfun.io)
- [Knowfun OpenAPI Docs](https://knowfun.io/api-platform)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Claude Desktop](https://claude.ai/download)
- [Claude Code CLI](https://docs.anthropic.com/claude/docs/claude-code)
- [Cursor](https://cursor.sh)

## License

MIT

## Support

For issues or suggestions, please contact the Knowfun team or submit an Issue.
