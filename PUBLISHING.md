# Publishing Guide / 发布指南

[中文](#中文) | [English](#english)

---

## English

### Publishing Platforms

#### 1. NPM (npm.js) ⭐ Primary Distribution

**Prerequisites:**
- NPM account (register at https://www.npmjs.com/signup)
- Verified email
- 2FA enabled (recommended)

**Publishing Steps:**

```bash
# 1. Login to NPM (first time only)
npm login

# 2. Verify package name is available
npm view knowfun-mcp

# 3. Build the project
npm run build

# 4. Test package locally
npm pack
# This creates knowfun-mcp-1.0.1.tgz

# 5. Publish to NPM
npm publish

# 6. Verify publication
npm view knowfun-mcp
```

**Updating Versions:**
```bash
# Patch release (1.0.1 → 1.0.2)
npm version patch

# Minor release (1.0.1 → 1.1.0)
npm version minor

# Major release (1.0.1 → 2.0.0)
npm version major

# Then publish
npm publish
```

**Package URL:** https://www.npmjs.com/package/knowfun-mcp

---

#### 2. GitHub ⭐ Source Code Hosting

**Setup:**

```bash
# 1. Create GitHub repository
# Visit https://github.com/new
# Repository name: knowfun-mcp
# Public repository

# 2. Push code to GitHub
git remote add origin https://github.com/MindStarAI/KnowFun-MCP.git
git push -u origin master

# 3. Create first release
git tag v1.0.1
git push origin v1.0.1
```

**GitHub Settings:**
- Add repository description
- Add topics: `mcp`, `model-context-protocol`, `claude`, `knowfun`, `ai`, `content-generation`
- Enable Issues
- Enable Discussions
- Add repository website: https://knowfun.io

**Recommended GitHub Actions:**

Create `.github/workflows/npm-publish.yml`:

```yaml
name: Publish to NPM

on:
  release:
    types: [created]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm run build
      - run: npm test
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

#### 3. Smithery.ai ⭐ MCP Server Marketplace

**Website:** https://smithery.ai/

**Submission Steps:**

1. Visit https://smithery.ai/submit
2. Fill in server details:
   - **Server Name:** Knowfun MCP
   - **GitHub URL:** https://github.com/MindStarAI/KnowFun-MCP
   - **NPM Package:** knowfun-mcp
   - **Description:** MCP server for Knowfun.io OpenAPI - Generate courses, posters, games, and films using AI
   - **Category:** Content Generation, AI Tools
   - **Tags:** content-generation, education, design, ai
3. Submit for review
4. Wait for approval (typically 1-3 days)

**Benefits:**
- Discoverable by Claude Desktop users
- Featured in MCP community
- Installation instructions included
- User ratings and reviews

---

#### 4. Anthropic MCP Servers Directory

**Repository:** https://github.com/modelcontextprotocol/servers

**Submission Process:**

1. Fork the repository
2. Edit `README.md`, add under appropriate category:

```markdown
### Content Generation

#### Knowfun MCP
MCP server for Knowfun.io OpenAPI - Generate educational courses, visual posters, interactive games, and short films using AI.

- GitHub: https://github.com/MindStarAI/KnowFun-MCP
- NPM: https://www.npmjs.com/package/knowfun-mcp
- Features: Course generation, Poster creation, Game building, Film production
```

3. Create Pull Request
4. Wait for maintainer review

---

#### 5. Knowfun.io Official Website

**Recommended Pages:**

1. **MCP Server Page** (`/mcp-server`)
   - Overview and features
   - Installation guide
   - Configuration examples
   - API documentation link

2. **Integration Guides** (`/docs/integrations`)
   - Claude Desktop integration
   - Claude Code CLI integration
   - Cursor integration

3. **Developer Portal** (`/api-platform`)
   - Link to MCP server
   - NPM package badge
   - GitHub stars badge
   - Download statistics

**Marketing Materials:**
- Demo videos
- Tutorial screenshots
- Use case examples
- Success stories

---

### Promotion Channels

#### Developer Communities

**International:**
- **Reddit:**
  - r/ClaudeAI
  - r/LocalLLaMA
  - r/artificial
- **Hacker News:** Show HN: Knowfun MCP - Generate Educational Content with Claude
- **Product Hunt:** Launch as new product
- **Dev.to:** Technical blog post
- **Medium:** Tutorial article

**Chinese:**
- **知乎 (Zhihu):** Technical articles and Q&A
- **掘金 (Juejin):** Developer community
- **CSDN:** Technical blog
- **SegmentFault:** Developer Q&A

#### Social Media

**Twitter/X:**
```
🚀 Introducing Knowfun MCP - Generate educational courses, posters, games, and films directly in @ClaudeAI

✨ Features:
📚 Course generation
🎨 Poster design
🎮 Interactive games
🎬 Short films

Try it now: npm install knowfun-mcp

#MCP #AI #Claude #ContentGeneration
```

**LinkedIn:**
- Share in AI/ML groups
- Post in developer communities
- Tag relevant companies

#### Video Content

**YouTube:**
- Installation tutorial
- Feature walkthrough
- Use case demonstrations
- Comparison with alternatives

**Bilibili (Chinese):**
- 中文教程
- 功能演示
- 实际应用案例

---

### Pre-Publishing Checklist

- [x] ✅ LICENSE file exists
- [x] ✅ README.md with clear documentation
- [x] ✅ package.json properly configured
- [x] ✅ Code compiled and tested
- [ ] 🔲 GitHub repository created
- [ ] 🔲 NPM account setup
- [ ] 🔲 Version tagged in git
- [ ] 🔲 CHANGELOG.md updated
- [ ] 🔲 npm publish executed
- [ ] 🔲 GitHub release created
- [ ] 🔲 Smithery.ai submission
- [ ] 🔲 Anthropic directory PR

---

### Post-Publishing Tasks

1. **Monitor:**
   - NPM download statistics
   - GitHub stars and issues
   - User feedback and bug reports

2. **Engage:**
   - Respond to issues promptly
   - Answer community questions
   - Collect feature requests

3. **Update:**
   - Regular dependency updates
   - Security patches
   - Feature enhancements

4. **Marketing:**
   - Share success stories
   - Create tutorial content
   - Participate in community discussions

---

## 中文

### 发布平台

#### 1. NPM (npm.js) ⭐ 主要分发渠道

**前置条件：**
- NPM 账号（https://www.npmjs.com/signup 注册）
- 邮箱验证
- 启用双因素认证（推荐）

**发布步骤：**

```bash
# 1. 登录 NPM（首次）
npm login

# 2. 检查包名是否可用
npm view knowfun-mcp

# 3. 构建项目
npm run build

# 4. 本地测试包
npm pack
# 会创建 knowfun-mcp-1.0.1.tgz

# 5. 发布到 NPM
npm publish

# 6. 验证发布
npm view knowfun-mcp
```

**版本更新：**
```bash
# 补丁版本 (1.0.1 → 1.0.2)
npm version patch

# 次要版本 (1.0.1 → 1.1.0)
npm version minor

# 主要版本 (1.0.1 → 2.0.0)
npm version major

# 然后发布
npm publish
```

**包链接：** https://www.npmjs.com/package/knowfun-mcp

---

#### 2. GitHub ⭐ 源代码托管

**设置步骤：**

```bash
# 1. 创建 GitHub 仓库
# 访问 https://github.com/new
# 仓库名称：knowfun-mcp
# 公开仓库

# 2. 推送代码到 GitHub
git remote add origin https://github.com/MindStarAI/KnowFun-MCP.git
git push -u origin master

# 3. 创建首个发布版本
git tag v1.0.1
git push origin v1.0.1
```

**GitHub 设置：**
- 添加仓库描述
- 添加主题：`mcp`, `model-context-protocol`, `claude`, `knowfun`, `ai`, `content-generation`
- 启用 Issues
- 启用 Discussions
- 添加仓库网站：https://knowfun.io

---

#### 3. Smithery.ai ⭐ MCP 服务器市场

**网站：** https://smithery.ai/

**提交步骤：**

1. 访问 https://smithery.ai/submit
2. 填写服务器信息：
   - **服务器名称：** Knowfun MCP
   - **GitHub URL：** https://github.com/MindStarAI/KnowFun-MCP
   - **NPM 包：** knowfun-mcp
   - **描述：** MCP server for Knowfun.io OpenAPI - Generate courses, posters, games, and films using AI
   - **分类：** Content Generation, AI Tools
   - **标签：** content-generation, education, design, ai
3. 提交审核
4. 等待批准（通常 1-3 天）

---

#### 4. Anthropic MCP 服务器目录

**仓库：** https://github.com/modelcontextprotocol/servers

**提交流程：**

1. Fork 仓库
2. 编辑 `README.md`，在适当分类下添加：

```markdown
### Content Generation

#### Knowfun MCP
MCP server for Knowfun.io OpenAPI - 使用 AI 生成教育课程、视觉海报、互动游戏和短视频。

- GitHub: https://github.com/MindStarAI/KnowFun-MCP
- NPM: https://www.npmjs.com/package/knowfun-mcp
- 功能：课程生成、海报创建、游戏构建、影片制作
```

3. 创建 Pull Request
4. 等待维护者审核

---

#### 5. Knowfun.io 官方网站

**推荐页面：**

1. **MCP 服务器页面** (`/mcp-server`)
   - 概述和功能
   - 安装指南
   - 配置示例
   - API 文档链接

2. **集成指南** (`/docs/integrations`)
   - Claude Desktop 集成
   - Claude Code CLI 集成
   - Cursor 集成

3. **开发者门户** (`/api-platform`)
   - MCP 服务器链接
   - NPM 包徽章
   - GitHub 星标徽章
   - 下载统计

---

### 推广渠道

#### 开发者社区

**国际平台：**
- **Reddit:** r/ClaudeAI, r/LocalLLaMA, r/artificial
- **Hacker News:** Show HN
- **Product Hunt:** 产品发布
- **Dev.to / Medium:** 技术文章

**中文平台：**
- **知乎：** 技术文章和问答
- **掘金：** 开发者社区
- **CSDN：** 技术博客
- **SegmentFault：** 开发者问答

#### 社交媒体

**Twitter/X 示例：**
```
🚀 推出 Knowfun MCP - 在 @ClaudeAI 中直接生成教育课程、海报、游戏和影片

✨ 功能：
📚 课程生成
🎨 海报设计
🎮 互动游戏
🎬 短视频

立即尝试：npm install knowfun-mcp

#MCP #AI #Claude #内容生成
```

#### 视频内容

**YouTube / Bilibili：**
- 安装教程
- 功能演示
- 使用案例
- 对比分析

---

### 发布前检查清单

- [x] ✅ LICENSE 文件已存在
- [x] ✅ README.md 文档完整
- [x] ✅ package.json 配置正确
- [x] ✅ 代码已编译和测试
- [ ] 🔲 创建 GitHub 仓库
- [ ] 🔲 设置 NPM 账号
- [ ] 🔲 Git 版本标签
- [ ] 🔲 更新 CHANGELOG.md
- [ ] 🔲 执行 npm publish
- [ ] 🔲 创建 GitHub release
- [ ] 🔲 提交到 Smithery.ai
- [ ] 🔲 提交 PR 到 Anthropic 目录

---

### 发布后任务

1. **监控：**
   - NPM 下载统计
   - GitHub 星标和 issues
   - 用户反馈和错误报告

2. **互动：**
   - 及时回应 issues
   - 回答社区问题
   - 收集功能需求

3. **更新：**
   - 定期依赖更新
   - 安全补丁
   - 功能增强

4. **营销：**
   - 分享成功案例
   - 创建教程内容
   - 参与社区讨论

---

## Quick Commands Reference

```bash
# Build and test
npm run build
npm test

# Publish to NPM
npm login
npm publish

# Create Git release
git tag v1.0.1
git push origin v1.0.1

# Update version
npm version patch|minor|major
```

## Support

For publishing questions or issues:
- Email: support@knowfun.io
- GitHub Issues: https://github.com/MindStarAI/KnowFun-MCP/issues
- Documentation: https://knowfun.io/docs
