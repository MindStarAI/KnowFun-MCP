# Knowfun MCP Usage Examples

[中文文档](./USAGE_EXAMPLES.md) | English

This document provides specific examples of using the Knowfun MCP server.

## Prerequisites

1. Ensure MCP server is configured in Claude Desktop / Claude Code / Cursor
2. Ensure valid `KNOWFUN_API_KEY` is set
3. Restart your tool to load configuration

## Usage Examples

### 1. View API Configuration Options

Before creating tasks, it's recommended to view available configuration options:

```
Please help me view Knowfun API configuration options
```

Claude will call the `get_schema` tool, returning all available:
- Content style options
- PPT template options
- Language options
- Voice options
- Generation methods, etc.

### 2. Create Course Generation Task

#### Basic Example (using default config)

```
Please use Knowfun to create a course about "Introduction to Artificial Intelligence" with content:
Artificial Intelligence (AI) is a branch of computer science dedicated to creating systems
that can simulate human intelligence. It mainly includes machine learning, deep learning,
natural language processing, and other technologies.
```

#### Advanced Example (custom config)

```
Please use Knowfun to create a course:
- requestId: course-ai-intro-001
- Task type: course
- Content: Introduction to artificial intelligence basics
- Config:
  - Content language: English
  - Narration language: English
  - Aspect ratio: landscape
  - Content style: concise
```

### 3. Create Poster

```
Help me generate a knowledge infographic poster about "Blockchain Technology Principles":
- requestId: poster-blockchain-001
- Task type: poster
- Content: Blockchain is a distributed ledger technology that ensures data security
  through decentralization...
- Config:
  - Layout: infographic
  - Style: hand-drawn (handDrawn)
  - Aspect ratio: 16:9
```

### 4. Create Interactive Game

```
Please create an interactive game to learn about "Solar System Planets":
- requestId: game-solar-system-001
- Task type: game
- Content: Introduce basic characteristics and positions of the eight planets in the solar system
- Config:
  - Game type: interactive demonstration (interactive)
```

### 5. Create Short Film/Micro-film

```
Help me create a tutorial video about "Newton's Three Laws":
- requestId: film-newton-laws-001
- Task type: film
- Content: Explain Newton's first, second, and third laws through real-life examples
- Config:
  - Film style: tutorial (tutorial)
  - Aspect ratio: 16:9
```

### 6. Query Task Status

#### Query by taskId

```
Please help me check the status of task <taskId>
```

#### Query by requestId

```
Please query the status of task with requestId "course-ai-intro-001"
```

### 7. Get Detailed Task Results

```
Please get detailed results for task <taskId>, including video, image, and other resource links
```

For debug information:
```
Please get detailed results for task <taskId> with verbose mode enabled
```

### 8. View Task List

#### View all tasks

```
Please list all my recently created tasks
```

#### Filter by type

```
Please list all my course generation tasks
```

#### Filter by status

```
Please list all successfully completed tasks
```

#### Paginated query

```
Please show page 2 of tasks, 10 items per page
```

### 9. Query Credit Information

#### Query balance

```
Please check my Knowfun credit balance
```

#### Query pricing

```
Please tell me how many credits each type of task consumes
```

#### Query usage details

```
Please query my credit usage details for the past month
```

Or specify date range:
```
Please query my credit usage from 2026-02-01 to 2026-02-28
```

## Complete Workflow Example

### Scenario: Create a Complete Tutorial Course

```
I want to use Knowfun to create a tutorial course about "Python Programming Introduction":

1. First, please help me view available course configuration options
2. Then, create a course using the following config:
   - requestId: python-intro-20260301
   - Content: Python is an easy-to-learn programming language widely used in data science,
     web development, and more. This course introduces Python basics, data types,
     control flow, and function definitions.
   - Config:
     - Content language: English
     - Narration language: English
     - Voice: Professional male
     - Aspect ratio: landscape
3. After creation, check task status every 30 seconds until task completes
4. When task completes, get detailed results and show video link
```

## Notes

1. **requestId uniqueness**: requestId must be unique for each task creation, recommend using timestamp or UUID
2. **Credit consumption**: Different task types consume different amounts of credits, recommend checking pricing first
3. **Task status**: After creation, tasks go through these statuses:
   - `pending` - Waiting
   - `processing` - Processing
   - `parsing` - Parsing
   - `generating` - Generating
   - `success` - Success
   - `failed` - Failed
4. **Polling interval**: Recommend querying task status every 30-60 seconds, avoid too frequent polling
5. **Configuration options**: Different task types have different config options, recommend calling `get_schema` first

## Advanced Tips

### Batch Task Management

```
Please help me:
1. Create 3 course tasks with different topics
2. Wait for all tasks to complete
3. Summarize and show all task result links
```

### Task Monitoring

```
Please continuously monitor my task list and notify me when tasks complete
```

### Credit Budget Management

```
I want to create 5 course tasks, please help me first:
1. Query current credit balance
2. Query course task pricing
3. Confirm if there are enough credits
4. If sufficient, batch create these 5 tasks
```

## Troubleshooting

### Task Failed

If task status shows `failed`, you can:
```
Please get detailed information for task <taskId> with verbose mode enabled to see the failure reason
```

### Insufficient Credits

```
My task creation failed with insufficient credits, please help me:
1. View current balance
2. View usage details
3. Tell me how many more credits I need to recharge
```

### API Key Issues

If you encounter authentication errors, check:
1. Is API Key correct
2. Is API Key expired
3. Does API Key have sufficient permissions

## More Help

- Visit [knowfun.io](https://knowfun.io) for detailed documentation
- Go to `/api-platform` page to manage your API Keys
- View credit recharge and package options
