#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  McpError,
  ErrorCode,
} from "@modelcontextprotocol/sdk/types.js";
import axios, { AxiosInstance } from "axios";
import * as dotenv from "dotenv";

dotenv.config();

// Knowfun API Client
class KnowfunClient {
  private client: AxiosInstance;
  private apiKey: string;
  private baseURL: string;

  constructor(apiKey: string, baseURL: string) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
    });
  }

  // 创建任务
  async createTask(params: {
    requestId: string;
    taskType: "course" | "poster" | "game" | "film";
    material: {
      text?: string;
      url?: string;
      type?: string;
    };
    config?: any;
    callbackUrl?: string;
    language?: string;
  }) {
    const response = await this.client.post("/api/openapi/v1/tasks", params);
    return response.data;
  }

  // 查询任务状态
  async getTask(taskId: string) {
    const response = await this.client.get(`/api/openapi/v1/tasks/${taskId}`);
    return response.data;
  }

  // 按 requestId 查询任务
  async getTaskByRequestId(requestId: string) {
    const response = await this.client.get(
      `/api/openapi/v1/tasks/by-request/${requestId}`
    );
    return response.data;
  }

  // 查询任务详情
  async getTaskDetail(taskId: string, verbose: boolean = false) {
    const response = await this.client.get(
      `/api/openapi/v1/tasks/${taskId}/detail`,
      {
        params: { verbose },
      }
    );
    return response.data;
  }

  // 获取任务列表
  async listTasks(params?: {
    page?: number;
    limit?: number;
    status?: string;
    taskType?: string;
  }) {
    const response = await this.client.get("/api/openapi/v1/tasks", { params });
    return response.data;
  }

  // 查询积分余额
  async getCreditsBalance() {
    const response = await this.client.get("/api/openapi/v1/credits/balance");
    return response.data;
  }

  // 获取积分定价
  async getCreditsPricing() {
    const response = await this.client.get("/api/openapi/v1/credits/pricing");
    return response.data;
  }

  // 获取 API Schema
  async getSchema() {
    const response = await this.client.get("/api/openapi/v1/schema");
    return response.data;
  }

  // 查询积分消耗明细
  async getUsage(params?: { startDate?: string; endDate?: string }) {
    const response = await this.client.get("/api/openapi/usage", { params });
    return response.data;
  }
}

// MCP Server
const server = new Server(
  {
    name: "knowfun-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Initialize Knowfun client
const apiKey = process.env.KNOWFUN_API_KEY;
const baseURL = process.env.KNOWFUN_API_BASE_URL || "https://api.knowfun.io";

if (!apiKey) {
  console.error("KNOWFUN_API_KEY environment variable is required");
  process.exit(1);
}

const knowfunClient = new KnowfunClient(apiKey, baseURL);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "create_task",
        description:
          "创建一个新的内容生成任务（课程、海报、游戏或短剧）",
        inputSchema: {
          type: "object",
          properties: {
            requestId: {
              type: "string",
              description: "用户自定义请求ID（1-64字符，用于幂等性控制）",
            },
            taskType: {
              type: "string",
              enum: ["course", "poster", "game", "film"],
              description: "任务类型：course-课程，poster-海报，game-游戏，film-短剧",
            },
            material: {
              type: "object",
              properties: {
                text: { type: "string", description: "文本内容" },
                url: { type: "string", description: "文档或网页URL" },
                type: {
                  type: "string",
                  description: "素材类型：text, url, pdf, doc, docx等",
                },
              },
              description: "输入素材",
            },
            config: {
              type: "object",
              description:
                "生成配置（根据 taskType 不同，配置项也不同。可先调用 get_schema 查看可用配置）",
            },
            callbackUrl: {
              type: "string",
              description: "任务完成后的回调URL（可选）",
            },
            language: {
              type: "string",
              description: "语言设置（可选，默认为 zh）",
            },
          },
          required: ["requestId", "taskType", "material"],
        },
      },
      {
        name: "get_task",
        description: "根据 taskId 查询任务状态",
        inputSchema: {
          type: "object",
          properties: {
            taskId: {
              type: "string",
              description: "任务ID",
            },
          },
          required: ["taskId"],
        },
      },
      {
        name: "get_task_by_request_id",
        description: "根据 requestId 查询任务状态",
        inputSchema: {
          type: "object",
          properties: {
            requestId: {
              type: "string",
              description: "请求ID",
            },
          },
          required: ["requestId"],
        },
      },
      {
        name: "get_task_detail",
        description: "获取任务的详细信息（包括生成结果）",
        inputSchema: {
          type: "object",
          properties: {
            taskId: {
              type: "string",
              description: "任务ID",
            },
            verbose: {
              type: "boolean",
              description: "是否返回详细的调试信息（可选，默认false）",
              default: false,
            },
          },
          required: ["taskId"],
        },
      },
      {
        name: "list_tasks",
        description: "获取任务列表（支持分页和筛选）",
        inputSchema: {
          type: "object",
          properties: {
            page: {
              type: "number",
              description: "页码（从1开始）",
              default: 1,
            },
            limit: {
              type: "number",
              description: "每页数量",
              default: 20,
            },
            status: {
              type: "string",
              description: "任务状态筛选：pending, processing, success, failed等",
            },
            taskType: {
              type: "string",
              description: "任务类型筛选：course, poster, game, film",
            },
          },
        },
      },
      {
        name: "get_credits_balance",
        description: "查询当前 API Key 的积分余额",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "get_credits_pricing",
        description: "获取各类任务的积分消耗定价",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "get_schema",
        description: "获取 API 配置 Schema（包括所有可用的内容风格、模板、语言等选项）",
        inputSchema: {
          type: "object",
          properties: {},
        },
      },
      {
        name: "get_usage",
        description: "查询积分消耗明细",
        inputSchema: {
          type: "object",
          properties: {
            startDate: {
              type: "string",
              description: "开始日期（YYYY-MM-DD）",
            },
            endDate: {
              type: "string",
              description: "结束日期（YYYY-MM-DD）",
            },
          },
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    const { name, arguments: args } = request.params;

    switch (name) {
      case "create_task": {
        const result = await knowfunClient.createTask(args as any);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "get_task": {
        const result = await knowfunClient.getTask(args?.taskId as string);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "get_task_by_request_id": {
        const result = await knowfunClient.getTaskByRequestId(
          args?.requestId as string
        );
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "get_task_detail": {
        const result = await knowfunClient.getTaskDetail(
          args?.taskId as string,
          args?.verbose as boolean
        );
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "list_tasks": {
        const result = await knowfunClient.listTasks(args as any);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "get_credits_balance": {
        const result = await knowfunClient.getCreditsBalance();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "get_credits_pricing": {
        const result = await knowfunClient.getCreditsPricing();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "get_schema": {
        const result = await knowfunClient.getSchema();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      case "get_usage": {
        const result = await knowfunClient.getUsage(args as any);
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(result, null, 2),
            },
          ],
        };
      }

      default:
        throw new McpError(
          ErrorCode.MethodNotFound,
          `Unknown tool: ${name}`
        );
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data?.error || error.message;
      throw new McpError(
        ErrorCode.InternalError,
        `API Error (${status}): ${message}`
      );
    }
    throw new McpError(ErrorCode.InternalError, `Error: ${error.message}`);
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Knowfun MCP server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});
