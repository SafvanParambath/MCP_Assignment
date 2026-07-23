const { devices } = require('@playwright/test');

module.exports = {
  testDir: './tests',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
};
