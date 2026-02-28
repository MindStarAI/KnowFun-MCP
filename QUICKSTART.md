# Knowfun MCP Quick Start

[中文](./QUICKSTART.zh.md) | English

## Get Started in 5 Minutes

### Step 1: Get API Key

1. Visit [knowfun.io](https://knowfun.io) and login
2. Go to `/api-platform` page
3. Click "Create API Key" button
4. Copy the generated API Key (format: `kf_xxxxx...`)

### Step 2: Configure Environment Variables

```bash
# In project directory
cp .env.example .env

# Edit .env file and fill in your API Key
# KNOWFUN_API_KEY=kf_your_real_api_key_here
```

### Step 3: Configure in Claude Desktop

**macOS users**: Edit `~/Library/Application Support/Claude/claude_desktop_config.json`

**Windows users**: Edit `%APPDATA%\Claude\claude_desktop_config.json`

Add the following configuration (replace path and API Key):

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/Users/jamson/code/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "kf_your_real_api_key_here",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

> 💡 If you already have other MCP servers, just add the `knowfun` entry in `mcpServers`.

### Step 4: Configure in Claude Code

Edit `~/.config/claude/settings.json`:

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/Users/jamson/code/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "kf_your_real_api_key_here",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

### Step 5: Configure in Cursor

Create `.cursor/mcp_config.json` in your project:

```json
{
  "mcpServers": {
    "knowfun": {
      "command": "node",
      "args": ["/Users/jamson/code/knowfun-mcp/dist/index.js"],
      "env": {
        "KNOWFUN_API_KEY": "kf_your_real_api_key_here",
        "KNOWFUN_API_BASE_URL": "https://api.knowfun.io"
      }
    }
  }
}
```

### Step 6: Restart Your Tool

- **Claude Desktop**: Completely quit and restart
- **Claude Code**: Restart CLI session
- **Cursor**: Reload window or restart

### Step 7: Verify Installation

In Claude Desktop, Claude Code, or Cursor, type:

```
Please check my Knowfun credit balance
```

If you see credit data returned, installation is successful! 🎉

## First Task: Create a Course

Try in your tool:

```
Help me create a course about "Introduction to Machine Learning" using Knowfun, covering:
- What is machine learning
- Difference between supervised and unsupervised learning
- Common machine learning algorithms
```

Claude will automatically:
1. Create the task
2. Return task ID
3. You can query task progress anytime

Query task status:
```
Please check the status of task <task ID>
```

Get final result:
```
Please get the detailed results of task <task ID>
```

## Common Questions

### Q: How to know if task is complete?

Task status progresses: `pending` → `processing` → `generating` → `success`

You can periodically ask Claude: "Please check the status of task xxx"

### Q: How long does a task take?

- Course tasks: Usually 3-10 minutes
- Poster tasks: Usually 1-3 minutes
- Game tasks: Usually 2-5 minutes
- Film tasks: Usually 5-15 minutes

Actual time depends on content complexity and server load.

### Q: How to view credit usage?

```
Please query my Knowfun credit usage details
```

### Q: What if task fails?

```
Please get detailed information for task <task ID> with verbose mode enabled
```

This will show detailed error information to help you understand the failure reason.

### Q: How to customize generation config?

First view available options:
```
Please view all Knowfun API configuration options
```

Then specify config when creating task:
```
When creating the course, use the following config:
- Content language: English
- Narration language: English
- Voice type: Professional female
- Aspect ratio: Landscape
```

## Next Steps

- 📖 Check [README.md](./README.en.md) for all available tools
- 📝 Check [USAGE_EXAMPLES.md](./USAGE_EXAMPLES.en.md) for more usage scenarios
- 🌐 Visit [knowfun.io/api-platform](https://knowfun.io/api-platform) to manage your API Keys

## Need Help?

- Visit knowfun.io for complete documentation
- Contact Knowfun technical support team
