# Knowfun MCP 快速入门

中文 | [English](./QUICKSTART.md)

## 5 分钟快速上手

### 步骤 1：获取 API Key

1. 访问 [knowfun.io](https://knowfun.io) 并登录
2. 进入 `/api-platform` 页面
3. 点击"创建 API Key"按钮
4. 复制生成的 API Key（格式为 `kf_xxxxx...`）

### 步骤 2：配置环境变量

```bash
# 在项目目录下
cp .env.example .env

# 编辑 .env 文件，填入你的 API Key
# KNOWFUN_API_KEY=kf_your_real_api_key_here
```

### 步骤 3：选择你的工具并配置

#### 选项 A: Claude Desktop

**macOS 用户**：编辑 `~/Library/Application Support/Claude/claude_desktop_config.json`

**Windows 用户**：编辑 `%APPDATA%\Claude\claude_desktop_config.json`

添加以下配置（注意替换路径和 API Key）：

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

> 💡 如果你已经有其他 MCP servers，只需在 `mcpServers` 中添加 `knowfun` 这一项即可。

#### 选项 B: Claude Code (命令行)

编辑 `~/.config/claude/settings.json`：

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

#### 选项 C: Cursor

在项目根目录创建 `.cursor/mcp_config.json`：

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

> 📖 更多配置选项和故障排查，请查看 [CONFIGURATION.md](./CONFIGURATION.md)

### 步骤 4：重启你的工具

- **Claude Desktop**: 完全退出并重新启动
- **Claude Code**: 重启 CLI 会话
- **Cursor**: 重新加载窗口（`Cmd/Ctrl + Shift + P` → `Developer: Reload Window`）

### 步骤 5：验证安装

在你的工具中输入：

```
请查看我的 Knowfun 积分余额
```

如果看到返回的积分数据，说明安装成功！🎉

## 第一个任务：创建课程

在你的工具中尝试：

```
帮我用 Knowfun 创建一个关于"机器学习入门"的课程，内容包括：
- 什么是机器学习
- 监督学习和非监督学习的区别
- 常见的机器学习算法
```

Claude 会自动：
1. 创建任务
2. 返回任务 ID
3. 你可以随时查询任务进度

查询任务状态：
```
请查询任务 <任务ID> 的状态
```

获取最终结果：
```
请获取任务 <任务ID> 的详细结果
```

## 常见问题

### Q: 如何知道任务是否完成？

任务状态会经历：`pending` → `processing` → `generating` → `success`

可以定期询问 Claude："请查询任务 xxx 的状态"

### Q: 任务需要多久完成？

- 课程任务：通常 3-10 分钟
- 海报任务：通常 1-3 分钟
- 游戏任务：通常 2-5 分钟
- 短剧任务：通常 5-15 分钟

实际时间取决于内容复杂度和服务器负载。

### Q: 如何查看积分消耗？

```
请查询我的 Knowfun 积分消耗明细
```

### Q: 任务失败了怎么办？

```
请获取任务 <任务ID> 的详细信息，开启 verbose 模式
```

这会显示详细的错误信息，帮助你了解失败原因。

### Q: 如何自定义生成配置？

首先查看可用选项：
```
请查看 Knowfun API 的所有配置选项
```

然后在创建任务时指定配置：
```
创建课程时，使用以下配置：
- 内容语言：中文
- 解说语言：英文
- 音色：专业女声
- 宽高比：横屏
```

## 下一步

- 📖 查看 [README.md](./README.md) 了解所有可用工具
- 📝 查看 [USAGE_EXAMPLES.md](./USAGE_EXAMPLES.md) 学习更多使用场景
- ⚙️ 查看 [CONFIGURATION.md](./CONFIGURATION.md) 了解详细配置
- 🌐 访问 [knowfun.io/api-platform](https://knowfun.io/api-platform) 管理你的 API Keys

## 需要帮助？

- 访问 knowfun.io 查看完整文档
- 联系 Knowfun 技术支持团队
