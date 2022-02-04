const appConfig = require('config');
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    browserName: 'chromium',
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    launchOptions: {
      args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream'],
    },
    baseURL: appConfig.baseUrl,
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
  },
  timeout: 180000,
  workers: 4,
  reporter: [['list'], ['html'], ['junit', { outputFile: 'playwright-report/results.xml' }]],
};
export default config;
