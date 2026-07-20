# MCP Assignment

This workspace is prepared for three MCP integrations:

- Jira MCP
- Playwright MCP
- GitHub MCP

## What is configured

- VS Code MCP server configuration lives in [.vscode/mcp.json](.vscode/mcp.json)
- Playwright test configuration lives in [playwright.config.ts](playwright.config.ts)
- Local test dependencies are defined in [package.json](package.json)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Open the workspace in VS Code and allow the MCP configuration to load.
3. Fill in the prompts for GitHub and Jira credentials when VS Code asks for them.
4. Run Playwright tests:
   ```bash
   npm test
   ```

## Environment variables

If you prefer environment-based configuration, create a `.env` file using the example below:

```env
BASE_URL=https://example.com
GITHUB_TOKEN=your_github_pat
JIRA_URL=https://your-company.atlassian.net
JIRA_EMAIL=you@example.com
JIRA_API_TOKEN=your_jira_api_token
```

> The MCP config uses prompts by default, so you do not need to store secrets in the repository.
