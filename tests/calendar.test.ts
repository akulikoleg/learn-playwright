import { test, expect } from "@playwright/test"
import moment from "moment";

// test("Calendar demo using fill function", async ({page}, Page) => {

//         await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
//         let date = "1993-04-09";

//         await page.fill('#birthday', date);
//         await page.waitForTimeout(3000);

// });




test("Calendar demo using moment", async ({page}, Page) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    let dateToSelect = "1993-04-09";
    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
    
    

    async function selectDate(date, dateToSelect){
        
        await page.click("//input[@placeholder='Start date']")
        const mmYY = page.locator("");
        const prev = page.locator('');
        const next = page.locator("");

       // let dateToSelect = 'May 2019';

        const thisMonth = moment(dateToSelect, 'MMMM YYYY').isBefore();

        while(await mmYY.textContent() != dateToSelect){
            if(thisMonth){
                await prev.click();
            }
            else {
                await next.click();
            }
        }
        await page.click(`//td[@class='day'][text()='${date}']`)

    }


});