# MCP Server Configuration Guide

[English](#english) | [中文](#中文)

---

## English

This guide shows how to configure Knowfun MCP server in different tools.

### Prerequisites

1. Complete installation: `npm install && npm run build`
2. Get your API Key from [knowfun.io/api-platform](https://knowfun.io/api-platform)
3. Test connection: `npm test`

---

### 1. Claude Desktop

Claude Desktop is the official desktop application for Claude.

**Configuration file location:**
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

**Configuration content:**

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/absolute/path/to/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "kf_your_api_key_here",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

**Steps:**

1. Open the configuration file in your text editor
2. If the file doesn't exist, create it
3. Replace `/absolute/path/to/knowfun-mcp/dist/index.js` with actual path
4. Replace `kf_your_api_key_here` with your real API Key
5. Save file and completely quit Claude Desktop
6. Restart Claude Desktop

**Verification:**

In Claude Desktop chat, type:
```
Please check my Knowfun credit balance
```

---

### 2. Claude Code (CLI)

Claude Code is the official command-line interface for Claude.

**Configuration file location:**
- **macOS/Linux**: `~/.config/claude/settings.json`
- **Windows**: `%USERPROFILE%\.config\claude\settings.json`

**Configuration content:**

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/absolute/path/to/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "kf_your_api_key_here",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

**Steps:**

1. Create config directory if it doesn't exist:
   ```bash
   mkdir -p ~/.config/claude
   ```

2. Create or edit `settings.json`:
   ```bash
   nano ~/.config/claude/settings.json
   # or
   code ~/.config/claude/settings.json
   ```

3. Paste the configuration, replace path and API Key

4. Save file

5. Restart Claude Code session

**Verification:**

In Claude Code CLI:
```bash
claude
# Then in the chat:
Please check my Knowfun credit balance
```

---

### 3. Cursor

Cursor is an AI-powered code editor.

#### Method 1: Project-level Configuration (Recommended)

Create `.cursor/mcp_config.json` in your project root:

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/absolute/path/to/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "kf_your_api_key_here",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

**Steps:**

1. Open your project in Cursor
2. Create `.cursor` directory:
   ```bash
   mkdir .cursor
   ```
3. Create `mcp_config.json` file in `.cursor` directory
4. Paste the configuration
5. Reload Cursor window: `Cmd/Ctrl + Shift + P` → `Developer: Reload Window`

#### Method 2: Global Configuration

**Configuration file location:**
- **macOS**: `~/Library/Application Support/Cursor/User/globalStorage/mcp_config.json`
- **Windows**: `%APPDATA%\Cursor\User\globalStorage\mcp_config.json`
- **Linux**: `~/.config/Cursor/User/globalStorage/mcp_config.json`

Use the same configuration content as Method 1.

#### Method 3: Via Settings UI

1. Open Cursor Settings: `Cmd/Ctrl + ,`
2. Search for "MCP" or "Model Context Protocol"
3. Click "Edit in settings.json"
4. Add Knowfun MCP configuration
5. Save and restart Cursor

**Verification:**

In Cursor's chat interface (Cmd/Ctrl + L), type:
```
Please check my Knowfun credit balance
```

---

### 4. Other MCP-Compatible Tools

For other tools supporting MCP protocol, general configuration format:

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/path/to/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "your_api_key",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

---

## Configuration Tips

### 1. Using Relative Paths

If your tool supports relative paths, you can use:

```json
{
  "command": "node",
  "args": ["./knowfun-mcp/dist/index.js"]
}
```

### 2. Multiple Environments

You can configure different API Keys for different environments:

**Development environment:**
```json
{
  "env": {
    "KNOWFUN_API_KEY": "kf_dev_key",
    "KNOWFUN_API_BASE_URL": "https://dev-api.knowfun.io"
  }
}
```

**Production environment:**
```json
{
  "env": {
    "KNOWFUN_API_KEY": "kf_prod_key",
    "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
  }
}
```

### 3. Using Environment Variables

Instead of hardcoding API Key in config, you can use environment variables:

```json
{
  "command": "sh",
  "args": [
    "-c",
    "export KNOWFUN_API_KEY=$MY_KNOWFUN_KEY && node /path/to/knowfun-mcp/dist/index.js"
  ]
}
```

Then set `MY_KNOWFUN_KEY` in your shell:
```bash
export MY_KNOWFUN_KEY=kf_your_api_key
```

### 4. Debug Mode

To see detailed logs, you can add debug environment variable:

```json
{
  "env": {
    "KNOWFUN_API_KEY": "your_key",
    "KNOWFUN_API_BASE_URL": "https://api.knowfun.io",
    "DEBUG": "true"
  }
}
```

---

## Troubleshooting

### Configuration not working?

1. **Check file path**
   - Ensure absolute path is correct
   - Use forward slashes `/` even on Windows
   - Check file has executable permissions: `chmod +x dist/index.js`

2. **Check API Key**
   - Ensure API Key starts with `kf_`
   - Check if API Key is expired or revoked
   - Run `npm test` to verify

3. **Check tool restart**
   - Must completely quit and restart tool
   - Some tools need "Reload Window" or "Developer: Reload"

4. **Check configuration format**
   - Ensure JSON format is valid (no trailing commas)
   - Check quotes are correct (use double quotes)

5. **View logs**
   - Claude Desktop: Check `~/Library/Logs/Claude/`
   - Cursor: Open Developer Tools → Console
   - Claude Code: Run with `-v` or `--verbose` flag

### Still not working?

1. Verify MCP server works independently:
   ```bash
   npm test
   ```

2. Check tool's MCP support version

3. Try simplest configuration first, then add features gradually

4. Check official documentation for your tool

---

## 中文

本指南展示如何在不同工具中配置 Knowfun MCP server。

### 前提条件

1. 完成安装：`npm install && npm run build`
2. 从 [knowfun.io/api-platform](https://knowfun.io/api-platform) 获取 API Key
3. 测试连接：`npm test`

---

### 1. Claude Desktop

Claude Desktop 是 Claude 的官方桌面应用。

**配置文件位置：**
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

**配置内容：**

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/绝对路径/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "kf_你的API密钥",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

**步骤：**

1. 用文本编辑器打开配置文件
2. 如果文件不存在，创建它
3. 将 `/绝对路径/knowfun-mcp/dist/index.js` 替换为实际路径
4. 将 `kf_你的API密钥` 替换为真实的 API Key
5. 保存文件并完全退出 Claude Desktop
6. 重启 Claude Desktop

**验证：**

在 Claude Desktop 聊天中输入：
```
请查看我的 Knowfun 积分余额
```

---

### 2. Claude Code (命令行工具)

Claude Code 是 Claude 的官方命令行界面。

**配置文件位置：**
- **macOS/Linux**: `~/.config/claude/settings.json`
- **Windows**: `%USERPROFILE%\.config\claude\settings.json`

**配置内容：**

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/绝对路径/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "kf_你的API密钥",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

**步骤：**

1. 如果配置目录不存在，创建它：
   ```bash
   mkdir -p ~/.config/claude
   ```

2. 创建或编辑 `settings.json`：
   ```bash
   nano ~/.config/claude/settings.json
   # 或
   code ~/.config/claude/settings.json
   ```

3. 粘贴配置，替换路径和 API Key

4. 保存文件

5. 重启 Claude Code 会话

**验证：**

在 Claude Code CLI 中：
```bash
claude
# 然后在聊天中：
请查看我的 Knowfun 积分余额
```

---

### 3. Cursor

Cursor 是一个 AI 驱动的代码编辑器。

#### 方法 1：项目级配置（推荐）

在项目根目录创建 `.cursor/mcp_config.json`：

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/绝对路径/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "kf_你的API密钥",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

**步骤：**

1. 在 Cursor 中打开你的项目
2. 创建 `.cursor` 目录：
   ```bash
   mkdir .cursor
   ```
3. 在 `.cursor` 目录中创建 `mcp_config.json` 文件
4. 粘贴配置
5. 重新加载 Cursor 窗口：`Cmd/Ctrl + Shift + P` → `Developer: Reload Window`

#### 方法 2：全局配置

**配置文件位置：**
- **macOS**: `~/Library/Application Support/Cursor/User/globalStorage/mcp_config.json`
- **Windows**: `%APPDATA%\Cursor\User\globalStorage\mcp_config.json`
- **Linux**: `~/.config/Cursor/User/globalStorage/mcp_config.json`

使用与方法 1 相同的配置内容。

#### 方法 3：通过设置界面

1. 打开 Cursor 设置：`Cmd/Ctrl + ,`
2. 搜索 "MCP" 或 "Model Context Protocol"
3. 点击 "Edit in settings.json"
4. 添加 Knowfun MCP 配置
5. 保存并重启 Cursor

**验证：**

在 Cursor 的聊天界面（Cmd/Ctrl + L）中输入：
```
请查看我的 Knowfun 积分余额
```

---

### 4. 其他支持 MCP 的工具

对于其他支持 MCP 协议的工具，通用配置格式：

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/路径/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "你的API密钥",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

---

## 配置技巧

### 1. 使用相对路径

如果你的工具支持相对路径，可以使用：

```json
{
  "command": "node",
  "args": ["./knowfun-mcp/dist/index.js"]
}
```

### 2. 多环境配置

可以为不同环境配置不同的 API Key：

**开发环境：**
```json
{
  "env": {
    "KNOWFUN_API_KEY": "kf_dev_key",
    "KNOWFUN_API_BASE_URL": "https://dev-api.knowfun.io"
  }
}
```

**生产环境：**
```json
{
  "env": {
    "KNOWFUN_API_KEY": "kf_prod_key",
    "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
  }
}
```

### 3. 使用环境变量

不在配置中硬编码 API Key，可以使用环境变量：

```json
{
  "command": "sh",
  "args": [
    "-c",
    "export KNOWFUN_API_KEY=$MY_KNOWFUN_KEY && node /path/to/knowfun-mcp/dist/index.js"
  ]
}
```

然后在 shell 中设置 `MY_KNOWFUN_KEY`：
```bash
export MY_KNOWFUN_KEY=kf_你的API密钥
```

### 4. 调试模式

要查看详细日志，可以添加调试环境变量：

```json
{
  "env": {
    "KNOWFUN_API_KEY": "你的密钥",
    "KNOWFUN_API_BASE_URL": "https://api.knowfun.io",
    "DEBUG": "true"
  }
}
```

---

## 故障排查

### 配置不生效？

1. **检查文件路径**
   - 确保绝对路径正确
   - 即使在 Windows 上也使用正斜杠 `/`
   - 检查文件是否有执行权限：`chmod +x dist/index.js`

2. **检查 API Key**
   - 确保 API Key 以 `kf_` 开头
   - 检查 API Key 是否过期或被撤销
   - 运行 `npm test` 验证

3. **检查工具重启**
   - 必须完全退出并重启工具
   - 某些工具需要"重新加载窗口"或"Developer: Reload"

4. **检查配置格式**
   - 确保 JSON 格式有效（无尾随逗号）
   - 检查引号是否正确（使用双引号）

5. **查看日志**
   - Claude Desktop: 查看 `~/Library/Logs/Claude/`
   - Cursor: 打开开发者工具 → 控制台
   - Claude Code: 使用 `-v` 或 `--verbose` 标志运行

### 仍然无法工作？

1. 验证 MCP server 独立工作：
   ```bash
   npm test
   ```

2. 检查工具的 MCP 支持版本

3. 先尝试最简单的配置，然后逐步添加功能

4. 查看你的工具的官方文档

---

## 相关资源

- [Model Context Protocol 官方文档](https://modelcontextprotocol.io/)
- [Claude Desktop 下载](https://claude.ai/download)
- [Claude Code CLI 文档](https://docs.anthropic.com/claude/docs/claude-code)
- [Cursor 官网](https://cursor.sh)
- [Knowfun API 平台](https://knowfun.io/api-platform)
