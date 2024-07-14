import { PlaywrightTestConfig, devices } from '@playwright/test';

// const capabilities = {
//   'browserName': 'pw-firefox', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
//   'browserVersion': 'latest',
//   'LT:Options': {
//     'platform': 'Windows 10',
//     'build': 'Playwright Test from CConfig',
//     'name': 'Playwright Sample Test -- 1',
//     'user': "oaculov",
//     'accessKey': "yBTDtRZcRLMmSIwUEjpQ77ee2rVteXSK9hBUravlgKc09e27mv",
//     'network': true,
//     'video': true,
//     'console': true
//   }
// }

const config: PlaywrightTestConfig = {

   projects: [
    {
      name: "chrome:latest:MacOS Ventura@lambdatest",
      use: {
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "chrome:latest:Windows 11@lambdatest",
      use: {
        viewport: { width: 1280, height: 720 },
      },
    },
      // {
      //   name: "chrome",
      //   use: {
      //     ...devices["Desktop Chrome"]
      //     }
      // },
      // {
      //   name: 'firefox',
      //   use: { ...devices['Desktop Firefox'] },
      // }
         
      
   ],

    testMatch: ["POMtest/addToCartUsingFixture.test.ts"],
    use: {
      // connectOptions: {
      //   wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
      // },
      baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
      headless: false,
      screenshot: "on",
      video: "on",
      launchOptions: {
         // slowMo: 1000
      }
    },
    retries: 0,
    reporter: [["dot"], ["json", {
      outputFile: "jsonReports/jsonReport.json"
    }], ["html" , {
        open: "never"
    }]
   ]
    

};

export default config;
