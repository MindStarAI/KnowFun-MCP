#!/usr/bin/env node

/**
 * Knowfun MCP 连接测试脚本
 * 用于验证 API Key 和网络连接是否正常
 */

import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.KNOWFUN_API_KEY;
const BASE_URL = process.env.KNOWFUN_API_BASE_URL || 'https://api.knowfun.io';

async function testConnection() {
  console.log('🔍 Knowfun MCP 连接测试\n');

  // 检查环境变量
  console.log('1️⃣ 检查环境变量...');
  if (!API_KEY) {
    console.error('❌ 错误：未找到 KNOWFUN_API_KEY 环境变量');
    console.log('💡 请创建 .env 文件并设置 KNOWFUN_API_KEY=kf_your_api_key');
    process.exit(1);
  }

  if (!API_KEY.startsWith('kf_')) {
    console.warn('⚠️  警告：API Key 格式可能不正确（应以 "kf_" 开头）');
  }

  console.log(`✅ API Key: ${API_KEY.substring(0, 10)}...${API_KEY.substring(API_KEY.length - 4)}`);
  console.log(`✅ Base URL: ${BASE_URL}\n`);

  // 测试 API 连接
  console.log('2️⃣ 测试 API 连接...');

  try {
    const client = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });

    // 测试 1: 查询积分余额
    console.log('   - 测试查询积分余额...');
    const balanceResponse = await client.get('/api/openapi/v1/credits/balance');
    const credits = balanceResponse.data.data;
    console.log(`   ✅ 可用积分: ${credits.available} (总获得: ${credits.earned}, 已使用: ${credits.used})`);

    // 测试 2: 获取 Schema
    console.log('   - 测试获取 API Schema...');
    const schemaResponse = await client.get('/api/openapi/v1/schema');
    console.log(`   ✅ Schema 版本: ${schemaResponse.data.data.version || 'v1'}`);

    // 测试 3: 查询任务列表
    console.log('   - 测试查询任务列表...');
    const tasksResponse = await client.get('/api/openapi/v1/tasks', {
      params: { page: 1, limit: 5 }
    });
    const taskCount = tasksResponse.data.data.tasks?.length || 0;
    console.log(`   ✅ 最近任务数: ${taskCount}\n`);

    // 成功
    console.log('🎉 所有测试通过！');
    console.log('✅ API Key 有效');
    console.log('✅ 网络连接正常');
    console.log('✅ API 服务可用\n');
    console.log('📝 下一步：');
    console.log('   1. 确保已编译项目: npm run build');
    console.log('   2. 配置 Claude Desktop（参考 QUICKSTART.md）');
    console.log('   3. 重启 Claude Desktop');
    console.log('   4. 在 Claude 中测试："请查看我的 Knowfun 积分余额"\n');

  } catch (error) {
    console.error('\n❌ 测试失败！\n');

    if (error.code === 'ENOTFOUND') {
      console.error('🌐 网络错误：无法连接到服务器');
      console.error(`   请检查：${BASE_URL}`);
    } else if (error.code === 'ECONNREFUSED') {
      console.error('🔌 连接被拒绝：服务器未响应');
    } else if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.error || error.message;

      if (status === 401) {
        console.error('🔑 认证失败：API Key 无效或已过期');
        console.error('   请检查：');
        console.error('   1. API Key 是否正确');
        console.error('   2. API Key 是否已过期');
        console.error('   3. API Key 是否已被撤销');
      } else if (status === 403) {
        console.error('🚫 权限不足：API Key 没有访问权限');
      } else if (status === 429) {
        console.error('⏱️  请求过于频繁：已触发限流');
      } else {
        console.error(`❌ API 错误 (${status}): ${message}`);
      }
    } else {
      console.error(`❌ 未知错误: ${error.message}`);
    }

    console.error('\n💡 故障排查：');
    console.error('   1. 检查 .env 文件中的 KNOWFUN_API_KEY 是否正确');
    console.error('   2. 访问 https://knowfun.io/api-platform 查看 API Key 状态');
    console.error('   3. 确认网络连接正常');
    console.error('   4. 查看 API 服务状态\n');

    process.exit(1);
  }
}

// 运行测试
testConnection().catch(error => {
  console.error('💥 严重错误:', error.message);
  process.exit(1);
});
