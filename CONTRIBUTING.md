# Contributing to Knowfun MCP / 贡献指南

[English](#english) | [中文](#中文)

---

## English

Thank you for your interest in contributing to Knowfun MCP! This document provides guidelines for contributing to this project.

### Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

### How Can I Contribute?

#### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if applicable**
- **Specify your environment**:
  - OS and version
  - Node.js version
  - Tool (Claude Desktop/Claude Code/Cursor) and version
  - MCP SDK version

#### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any alternatives you've considered**

#### Pull Requests

- Fork the repository and create your branch from `main`
- If you've added code, add tests
- Ensure your code follows the existing code style
- Update documentation as needed
- Write clear commit messages
- Test your changes thoroughly

### Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR-USERNAME/knowfun-mcp.git
   cd knowfun-mcp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env
   # Edit .env with your API key
   ```

4. **Build the project**
   ```bash
   npm run build
   ```

5. **Run tests**
   ```bash
   npm test
   ```

### Code Style

- Use TypeScript for all new code
- Follow existing code formatting
- Add comments for complex logic
- Use meaningful variable and function names
- Keep functions small and focused

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:
```
feat: add support for batch task creation
fix: resolve API timeout issue
docs: update configuration guide
```

### Documentation

- Update README.md if you change functionality
- Keep both Chinese and English documentation in sync
- Add examples for new features
- Update CHANGELOG.md

### Testing

- Add tests for new features
- Ensure all tests pass before submitting PR
- Test with different configurations
- Verify compatibility with all supported tools

### Questions?

Feel free to open an issue for questions or join our community discussions.

---

## 中文

感谢您对 Knowfun MCP 项目的关注！本文档提供了贡献指南。

### 行为准则

本项目遵循[行为准则](CODE_OF_CONDUCT.md)。参与项目即表示您同意遵守此准则。

### 如何贡献？

#### 报告 Bug

在创建 bug 报告前，请先检查现有 issues 避免重复。创建 bug 报告时，请包含尽可能多的细节：

- **使用清晰描述性的标题**
- **描述重现问题的确切步骤**
- **提供具体示例**
- **描述观察到的行为和预期行为**
- **如适用，包含截图**
- **说明您的环境**：
  - 操作系统和版本
  - Node.js 版本
  - 工具（Claude Desktop/Claude Code/Cursor）及版本
  - MCP SDK 版本

#### 建议功能改进

功能改进建议通过 GitHub issues 追踪。创建改进建议时：

- **使用清晰描述性的标题**
- **详细描述建议的功能改进**
- **解释为什么这个改进有用**
- **列出您考虑过的替代方案**

#### 提交 Pull Request

- Fork 仓库并从 `main` 创建您的分支
- 如果添加了代码，请添加测试
- 确保代码遵循现有代码风格
- 根据需要更新文档
- 编写清晰的提交信息
- 彻底测试您的更改

### 开发环境设置

1. **Fork 并克隆仓库**
   ```bash
   git clone https://github.com/YOUR-USERNAME/knowfun-mcp.git
   cd knowfun-mcp
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **设置环境**
   ```bash
   cp .env.example .env
   # 编辑 .env 填入您的 API key
   ```

4. **构建项目**
   ```bash
   npm run build
   ```

5. **运行测试**
   ```bash
   npm test
   ```

### 代码风格

- 所有新代码使用 TypeScript
- 遵循现有代码格式
- 为复杂逻辑添加注释
- 使用有意义的变量和函数名
- 保持函数小而专注

### 提交信息

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

- `feat:` - 新功能
- `fix:` - Bug 修复
- `docs:` - 文档更改
- `style:` - 代码风格更改（格式化等）
- `refactor:` - 代码重构
- `test:` - 添加或更新测试
- `chore:` - 维护任务

示例：
```
feat: 添加批量任务创建支持
fix: 解决 API 超时问题
docs: 更新配置指南
```

### 文档

- 如果更改功能，请更新 README.md
- 保持中英文文档同步
- 为新功能添加示例
- 更新 CHANGELOG.md

### 测试

- 为新功能添加测试
- 提交 PR 前确保所有测试通过
- 使用不同配置进行测试
- 验证与所有支持工具的兼容性

### 有疑问？

欢迎创建 issue 提问或加入我们的社区讨论。

---

## License

By contributing to Knowfun MCP, you agree that your contributions will be licensed under the MIT License.
