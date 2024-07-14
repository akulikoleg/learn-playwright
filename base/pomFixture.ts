import {test as baseTest, chromium} from '@playwright/test'
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homepage"
import SpecialHotPage from "../pages/specialHotPage"
import path from 'path'
const capabilities = {
    'browserName': 'pw-firefox', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    'browserVersion': 'latest',
    'LT:Options': {
      'platform': 'Windows 10',
      'build': 'Playwright Test from CConfig',
      'name': 'Playwright Sample Test -- 1',
      'user': "oaculov",
      'accessKey': "yBTDtRZcRLMmSIwUEjpQ77ee2rVteXSK9hBUravlgKc09e27mv",
      'network': true,
      'video': true,
      'console': true
    }
  }

const modifyCapabilities = (configName, testName) => {
    let config = configName.split("@lambdatest")[0];
    let [browserName, browserVersion, platform] = config.split(":");
    capabilities.browserName = browserName
      ? browserName
      : capabilities.browserName;
    capabilities.browserVersion = browserVersion
      ? browserVersion
      : capabilities.browserVersion;
    capabilities["LT:Options"]["platform"] = platform
      ? platform
      : capabilities["LT:Options"]["platform"];
    capabilities["LT:Options"]["name"] = testName;
  };

type pages = {
    registerPage: RegisterPage,
    loginPage: LoginPage,
    homePage: HomePage,
    specialPage: SpecialHotPage
}

const testPages = baseTest.extend<pages>({

    page: async ({}, use, testInfo) => {

        let fileName = testInfo.file.split(path.sep).pop();
        if (testInfo.project.name.match(/lambdatest/)) {
          modifyCapabilities(
            testInfo.project.name,
            `${testInfo.title} - ${fileName}`
          );
        
        const browser = await await chromium.connect({
            wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
          }) 
        const  context = await browser.newContext(testInfo.project.use);
        const ltPage = await context.newPage();
        await use(ltPage);
        const testStatus = {
            action: "setTestStatus",
            arguments: {
              status: testInfo.status,
              remark: testInfo.error?.stack || testInfo.error?.message,
            },
          };
          await ltPage.evaluate(() => {},
          `lambdatest_action: ${JSON.stringify(testStatus)}`);
        await ltPage.close();
        await context.close();
        await browser.close();
        }
        else {
            const browser = await chromium.launch();
            const context = await browser.newContext();
            const page = await context.newPage();
            await use(page);

        }

    },

    registerPage: async ({page}, use) => {
        await use(new RegisterPage(page));
    },
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({page}, use) => {
        await use(new HomePage(page));
    },
    specialPage: async ({page}, use) => {
        await use(new SpecialHotPage(page));
    }

})

export const test = testPages;
export const expect = testPages.expect;



