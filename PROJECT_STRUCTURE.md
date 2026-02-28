# Knowfun MCP Project Structure

[中文](./PROJECT_STRUCTURE.zh.md) | English

## 📁 File Descriptions

### Core Files

| File | Description |
|------|-------------|
| `src/index.ts` | MCP Server main program (TypeScript source) |
| `dist/index.js` | Compiled JavaScript code (generated from TypeScript) |
| `package.json` | Node.js project configuration |
| `tsconfig.json` | TypeScript compilation configuration |

### Configuration Files

| File | Description |
|------|-------------|
| `.env.example` | Environment variable template (copy to `.env` and fill in real values) |
| `.env` | Actual environment variables file (contains API Key, not committed to Git) |
| `.gitignore` | Git ignore rules |
| `claude_desktop_config.example.json` | Claude Desktop configuration example |

### Documentation Files

| File | Description | Recommended Reading Order |
|------|-------------|---------------------------|
| `README.md` / `README.zh.md` | Main project documentation (English/Chinese) | ⭐ 1️⃣ Read First |
| `QUICKSTART.md` / `QUICKSTART.zh.md` | 5-minute quick start guide (English/Chinese) | ⭐ 2️⃣ Quick Start |
| `USAGE_EXAMPLES.md` / `USAGE_EXAMPLES.zh.md` | Detailed usage examples and scenarios (English/Chinese) | 3️⃣ Deep Dive |
| `PROJECT_STRUCTURE.md` / `PROJECT_STRUCTURE.zh.md` | Project structure documentation (English/Chinese, this file) | 4️⃣ Understanding Structure |

### Tool Scripts

| File | Description | Usage |
|------|-------------|-------|
| `test-connection.js` | API connection test script | `npm test` |

## 🗂️ Directory Structure

```
knowfun-mcp/
├── src/                          # TypeScript source code
│   └── index.ts                  # MCP Server main program
│
├── dist/                         # Build output directory
│   ├── index.js                  # Compiled main program
│   └── index.d.ts                # TypeScript type definitions
│
├── node_modules/                 # NPM dependencies (auto-generated)
│
├── .env.example                  # Environment variable template
├── .gitignore                    # Git ignore configuration
├── package.json                  # Project configuration
├── package-lock.json             # Dependency lock file
├── tsconfig.json                 # TypeScript configuration
├── test-connection.js            # Connection test script
├── claude_desktop_config.example.json  # Claude Desktop config example
│
├── README.md                     # Main documentation (English)
├── README.zh.md                  # Main documentation (Chinese)
├── QUICKSTART.md                 # Quick start guide (English)
├── QUICKSTART.zh.md              # Quick start guide (Chinese)
├── USAGE_EXAMPLES.md             # Usage examples (English)
├── USAGE_EXAMPLES.zh.md          # Usage examples (Chinese)
├── PROJECT_STRUCTURE.md          # Project structure (English, this file)
└── PROJECT_STRUCTURE.zh.md       # Project structure (Chinese)
```

## 🔧 Main Technical Components

### Dependencies

#### Production Dependencies
- `@modelcontextprotocol/sdk`: MCP protocol SDK
- `axios`: HTTP client (for calling Knowfun API)
- `dotenv`: Environment variable management

#### Development Dependencies
- `typescript`: TypeScript compiler
- `@types/node`: Node.js type definitions

## 🚀 Workflow

### Development Flow
1. Edit `src/index.ts` source code
2. Run `npm run build` to compile
3. Use `npm test` to test connection
4. Verify functionality in Claude Desktop

### Watch Mode (Recommended for Development)
```bash
# Terminal 1: Watch file changes and auto-compile
npm run watch

# Terminal 2: After code changes, restart Claude Desktop to test
```

## 📦 Build Artifacts

After running `npm run build`, the following will be generated in the `dist/` directory:
- `index.js` - Executable JavaScript file
- `index.d.ts` - TypeScript type declaration file

## 🔑 Environment Variables

| Variable | Description | Required | Default Value |
|----------|-------------|----------|---------------|
| `KNOWFUN_API_KEY` | Knowfun API Key | ✅ Yes | None |
| `KNOWFUN_API_BASE_URL` | API base URL | ❌ No | `https://api.knowfun.io` |

## 🛠️ NPM Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run build` | Compile TypeScript |
| `npm run watch` | Watch file changes and auto-compile |
| `npm start` | Run directly (must compile first) |
| `npm run dev` | Compile and run |
| `npm test` | Test API connection |

## 🔍 Code Architecture

### KnowfunClient Class
Encapsulates all Knowfun API calls:
- `createTask()` - Create task
- `getTask()` - Query task status
- `getTaskDetail()` - Get task details
- `listTasks()` - Get task list
- `getCreditsBalance()` - Query credits
- `getCreditsPricing()` - Query pricing
- `getSchema()` - Get configuration schema
- `getUsage()` - Query usage details

### MCP Server Setup
1. **ListToolsRequestSchema Handler** - Register all available tools
2. **CallToolRequestSchema Handler** - Handle tool calls
3. **StdioServerTransport** - Use standard input/output communication

## 🔗 MCP Tools List

| Tool Name | Corresponding API | Description |
|-----------|-------------------|-------------|
| `create_task` | POST /openapi/v1/tasks | Create generation task |
| `get_task` | GET /openapi/v1/tasks/:taskId | Query task status |
| `get_task_by_request_id` | GET /openapi/v1/tasks/by-request/:requestId | Query by requestId |
| `get_task_detail` | GET /openapi/v1/tasks/:taskId/detail | Get detailed results |
| `list_tasks` | GET /openapi/v1/tasks | Get task list |
| `get_credits_balance` | GET /openapi/v1/credits/balance | Query credit balance |
| `get_credits_pricing` | GET /openapi/v1/credits/pricing | Get pricing information |
| `get_schema` | GET /openapi/v1/schema | Get configuration schema |
| `get_usage` | GET /openapi/usage | Query usage details |

## 📝 Modification Suggestions

### Adding New Tools
1. Add new method in `KnowfunClient` class
2. Register tool in `ListToolsRequestSchema` handler
3. Add processing logic in `CallToolRequestSchema` handler
4. Recompile: `npm run build`

### Modifying API Endpoint
Edit `KNOWFUN_API_BASE_URL` in `.env` file

### Debugging Tips
- Check Claude Desktop logs (macOS: `~/Library/Logs/Claude/`)
- Use `console.error()` to output debug info to stderr
- Run `npm test` to verify API connection

## 🎯 Future Development Suggestions

1. **Enhanced Error Handling**: Add more detailed error messages and retry logic
2. **Caching Mechanism**: Cache schema and pricing info to reduce API calls
3. **Webhook Support**: Implement task completion notification mechanism
4. **Batch Operations**: Support batch creation and querying of tasks
5. **Resource Management**: Implement download and management of resources (videos, images)

## 📚 Related Resources

- [MCP Official Documentation](https://modelcontextprotocol.io/)
- [Knowfun API Documentation](https://knowfun.io/api-platform)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Axios Documentation](https://axios-http.com/)
