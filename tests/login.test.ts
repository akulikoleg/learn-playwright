import {test,  chromium} from "@playwright/test"


test("Login test demo", async () => {

        const browser = await chromium.launch({
            headless: false
        });
        const context = await browser.newContext();
        const page = await context.newPage();


        await page.goto('https://ecommerce-playground.lambdatest.io/');
        await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span');
        // await page.click('text=Login');
        await page.click("'Login'");
        await page.locator("//input[@placeholder='E-Mail Address']").pressSequentially('koushik350@gmail.com');
        await page.fill('//input[@placeholder=\'Password\']', "Pass123$");
        await page.click("//input[@value=\"Login\"]");

        await page.waitForTimeout(5000);

        const newContext = await browser.newContext();

        const newpage = await newContext.newPage();
        await newpage.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

        await newpage.waitForTimeout(5000);

})