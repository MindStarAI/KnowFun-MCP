# 🎉 Knowfun MCP v1.0.1 - Initial Release

We're excited to announce the first public release of **Knowfun MCP** - a Model Context Protocol server that brings AI-powered content generation directly to your AI assistant!

## 🌟 What is Knowfun MCP?

Knowfun MCP enables Claude and other MCP-compatible AI assistants to generate professional educational and creative content through natural language commands. No complex API calls needed - just ask your AI assistant!

## ✨ Features

### 📚 Educational Course Generation
- Create multi-chapter courses with AI narration
- Support for multiple content languages (Chinese, English, etc.)
- Customizable voice types and presentation styles
- Automatic PPT generation with various templates

### 🎨 Visual Poster Creation
- Generate knowledge infographics and visual posters
- Multiple design styles (hand-drawn, photorealistic, minimalist, etc.)
- Various aspect ratios (1:1, 4:3, 16:9, and more)
- Perfect for social media, presentations, and marketing

### 🎮 Interactive Game Building
- Create educational games (story-based, quiz, missions)
- Engaging learning experiences
- Customizable game mechanics

### 🎬 Short Film Production
- Generate educational short videos
- Documentary, tutorial, and story styles
- Support for different aspect ratios (16:9, 9:16, 1:1)

### 💰 Credit Management
- Query credit balance in real-time
- Track usage history
- View pricing for different task types

## 🚀 Quick Start

### Installation

```bash
# Install globally via NPM
npm install -g knowfun-mcp
```

### Configuration (Claude Desktop)

Edit your Claude Desktop config file:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`

**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "knowfun-mcp",
      "env": {
        "KNOWFUN_API_KEY": "your_api_key_here",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

### Get Your API Key

1. Visit [knowfun.io](https://knowfun.io)
2. Navigate to `/api-platform`
3. Create your API Key (free tier available)

## 📖 Usage Examples

### Generate a Course
```
Create a 5-chapter course about "Introduction to Machine Learning" in English with detailed explanations.
```

### Create a Poster
```
Generate an infographic poster about "The Water Cycle" in a hand-drawn style.
```

### Check Credits
```
What's my Knowfun credit balance?
```

## 🛠️ MCP Tools Available

- `create_task` - Create content generation tasks
- `get_task` - Query task status by task ID
- `get_task_by_request_id` - Query task by request ID
- `get_task_detail` - Get detailed task results
- `list_tasks` - List all tasks with filtering
- `get_credits_balance` - Check credit balance
- `get_credits_pricing` - View pricing information
- `get_schema` - Get available configuration options
- `get_usage` - Query credit usage history

## 📚 Documentation

- 📖 [Complete Documentation](https://github.com/MindStarAI/KnowFun-MCP#readme)
- 🚀 [Quick Start Guide](https://github.com/MindStarAI/KnowFun-MCP/blob/master/QUICKSTART.md)
- 📝 [Usage Examples](https://github.com/MindStarAI/KnowFun-MCP/blob/master/USAGE_EXAMPLES.md)
- ⚙️ [Configuration Guide](https://github.com/MindStarAI/KnowFun-MCP/blob/master/CONFIGURATION.md)

## 🔗 Links

- **NPM Package:** https://www.npmjs.com/package/knowfun-mcp
- **GitHub Repository:** https://github.com/MindStarAI/KnowFun-MCP
- **Knowfun.io:** https://knowfun.io
- **API Platform:** https://knowfun.io/api-platform
- **Get API Key:** https://knowfun.io/api-platform

## 🤝 Community

- Submit issues: https://github.com/MindStarAI/KnowFun-MCP/issues
- Discussions: https://github.com/MindStarAI/KnowFun-MCP/discussions
- MCP Community: Listed in [Anthropic MCP Servers](https://github.com/modelcontextprotocol/servers)

## 📦 What's Included

- Full TypeScript implementation
- Comprehensive documentation (English + Chinese)
- Example configurations for Claude Desktop, Claude Code, and Cursor
- Connection test script
- MIT License

## 🙏 Credits

Built with:
- [@modelcontextprotocol/sdk](https://github.com/modelcontextprotocol/typescript-sdk) - MCP TypeScript SDK
- [axios](https://github.com/axios/axios) - HTTP client
- [TypeScript](https://www.typescriptlang.org/) - Type-safe development

## 🔄 What's Next?

We're actively working on:
- Additional content templates
- Enhanced error handling
- Performance optimizations
- More language support

## 💬 Feedback

We'd love to hear from you! Please share your feedback, feature requests, or report issues on our [GitHub Issues](https://github.com/MindStarAI/KnowFun-MCP/issues) page.

---

**Install now:** `npm install -g knowfun-mcp`

Happy creating! 🚀
