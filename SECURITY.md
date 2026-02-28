# Security Policy / 安全政策

[English](#english) | [中文](#中文)

---

## English

## Supported Versions

We release patches for security vulnerabilities for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Knowfun MCP seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Please Do NOT:

- Open a public GitHub issue for the vulnerability
- Discuss the vulnerability in public forums, social media, or chat rooms before it has been resolved

### Please DO:

1. **Email us directly** with details about the vulnerability:
   - Description of the vulnerability
   - Steps to reproduce the issue
   - Potential impact
   - Any suggested fixes (if you have them)

2. **Wait for our response** - We will acknowledge receipt of your vulnerability report within 3 business days

3. **Work with us** - We may ask for additional information or clarification

### What to Expect:

- **Acknowledgment**: Within 3 business days
- **Initial Assessment**: Within 7 days
- **Fix and Release**: Depends on severity, typically 14-30 days
- **Credit**: We will credit you in the security advisory (unless you prefer to remain anonymous)

## Security Best Practices

When using Knowfun MCP:

### API Key Management

- **Never commit** your `.env` file or any file containing your API key to version control
- **Use environment variables** for API keys, not hardcoded values
- **Rotate keys regularly** and immediately if you suspect compromise
- **Limit key permissions** to only what's necessary for your use case

### Configuration

- **Keep dependencies updated**: Run `npm audit` regularly
- **Review permissions**: Ensure MCP server runs with minimal necessary permissions
- **Use HTTPS**: Always use HTTPS for API communications (default)
- **Validate inputs**: When building on top of this library

### Monitoring

- **Monitor usage**: Regularly check your API usage through Knowfun dashboard
- **Enable logging**: Keep logs for security auditing (but don't log sensitive data)
- **Set up alerts**: Configure alerts for unusual activity

## Known Security Considerations

### API Key Storage

- API keys are stored in environment variables
- Never expose API keys in client-side code
- Use proper file permissions on `.env` files (chmod 600)

### Network Security

- All API communications use HTTPS
- No data is cached or logged by default
- Axios client follows security best practices

### Dependencies

- We regularly update dependencies to address security vulnerabilities
- Run `npm audit` to check for known vulnerabilities
- Subscribe to security advisories for major dependencies

## Security Updates

Security updates will be released as patch versions (e.g., 1.0.1, 1.0.2) and announced through:

- GitHub Security Advisories
- Release notes in CHANGELOG.md
- NPM package updates

## Additional Resources

- [Knowfun Security Policy](https://knowfun.io/security)
- [MCP Security Guidelines](https://modelcontextprotocol.io/security)

---

## 中文

## 支持的版本

我们为以下版本发布安全漏洞补丁：

| 版本    | 支持状态            |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## 报告漏洞

我们非常重视 Knowfun MCP 的安全性。如果您认为发现了安全漏洞，请按以下方式报告。

### 请不要：

- 为漏洞创建公开的 GitHub issue
- 在解决之前在公共论坛、社交媒体或聊天室讨论漏洞

### 请务必：

1. **直接发送电子邮件**，包含漏洞详细信息：
   - 漏洞描述
   - 重现问题的步骤
   - 潜在影响
   - 建议的修复方案（如果有）

2. **等待我们的回复** - 我们将在 3 个工作日内确认收到您的漏洞报告

3. **与我们合作** - 我们可能会要求提供额外信息或澄清

### 您可以期待：

- **确认回复**：3 个工作日内
- **初步评估**：7 天内
- **修复和发布**：取决于严重程度，通常 14-30 天
- **致谢**：我们将在安全公告中署名（除非您希望保持匿名）

## 安全最佳实践

使用 Knowfun MCP 时：

### API Key 管理

- **绝不提交** `.env` 文件或任何包含 API key 的文件到版本控制
- **使用环境变量** 存储 API keys，而非硬编码
- **定期轮换密钥**，如果怀疑泄露立即更换
- **限制密钥权限** 仅授予必要的权限

### 配置

- **保持依赖更新**：定期运行 `npm audit`
- **审查权限**：确保 MCP server 以最小必要权限运行
- **使用 HTTPS**：始终使用 HTTPS 进行 API 通信（默认）
- **验证输入**：在此库基础上构建时验证输入

### 监控

- **监控使用情况**：定期通过 Knowfun 仪表板检查 API 使用情况
- **启用日志记录**：保留日志用于安全审计（但不要记录敏感数据）
- **设置警报**：为异常活动配置警报

## 已知安全考虑

### API Key 存储

- API keys 存储在环境变量中
- 绝不在客户端代码中暴露 API keys
- 对 `.env` 文件使用适当的文件权限（chmod 600）

### 网络安全

- 所有 API 通信使用 HTTPS
- 默认不缓存或记录数据
- Axios 客户端遵循安全最佳实践

### 依赖项

- 我们定期更新依赖项以解决安全漏洞
- 运行 `npm audit` 检查已知漏洞
- 订阅主要依赖项的安全公告

## 安全更新

安全更新将作为补丁版本发布（例如 1.0.1、1.0.2），并通过以下方式公告：

- GitHub Security Advisories
- CHANGELOG.md 中的发布说明
- NPM 包更新

## 其他资源

- [Knowfun 安全政策](https://knowfun.io/security)
- [MCP 安全指南](https://modelcontextprotocol.io/security)

---

## Contact / 联系方式

For security concerns, please contact: support@knowfun.io

对于安全问题，请联系：support@knowfun.io
