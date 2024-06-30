import { test, expect } from "@playwright/test"
import moment from "moment";


test("Calendar demoQA using moment", async ({page}, Page) => {

    await page.goto('https://demoqa.com/date-picker');
    // let dateToSelect = "1993-04-09";
    // const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
    await selectDate(12, 'December 2023');
    expect(page.locator("//input[@id='datePickerMonthYearInput']")).toHaveValue("12/12/2023");
    

    async function selectDate(date: number, dateToSelect: string){
        
        await page.click("//input[@id='datePickerMonthYearInput']");
        const mmYY = page.
           locator("//*[@class='react-datepicker__current-month react-datepicker__current-month--hasYearDropdown react-datepicker__current-month--hasMonthDropdown']");
        const prev = page.locator("//button[@aria-label='Previous Month']");
        const next = page.locator("//button[@aria-label='Next Month']");

       // let dateToSelect = 'May 2019';

        const thisMonth = moment(dateToSelect, 'MMMM YYYY').isBefore();

        while(await mmYY.textContent() !== dateToSelect){
            if(thisMonth){
                await prev.click();
            }
            else {
                await next.click();
            }
        }
        
        await page.click(`//div[@class="react-datepicker__day react-datepicker__day--0${date}"]`);
       

    }

});