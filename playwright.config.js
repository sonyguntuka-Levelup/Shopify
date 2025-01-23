const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    projects: [
        {
            name: 'chrome',
            use: { ...devices['Desktop Chrome'] }
        }
    ],
    use: {
        launchOptions: {
            slowMo: 100,
            headless: false
        }
    }
};

module.exports = config;