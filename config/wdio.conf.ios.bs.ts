import { config as sharedConfig } from "./wdio.conf.js";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== 'CI') {
    dotenv.config(); // Load .env file only in local environment; on CI secrets are injected via GitHub Actions
}

export const config = {
    ...sharedConfig,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',

    capabilities: [{
    'bstack:options': {
      deviceName: 'iPhone 14 Pro Max',
      osVersion: '16',
      deviceOrientation: 'portrait',
    },
    'appium:app': process.env.BROWSERSTACK_IOS_APP_ID,
    'appium:options': {
      autoAcceptAlerts: true,
      newCommandTimeout: 300000,
    }
}],
    services: [
        [
          'browserstack',
          {
            app: process.env.BROWSERSTACK_IOS_APP_ID,
            buildIdentifier: "${BUILD_NUMBER}",
            browserstackLocal: false,
            testObservability: false,
            debug: true,
            networkLogs: true,
            consoleLogs: "warn"
          },
        ]
      ],
}