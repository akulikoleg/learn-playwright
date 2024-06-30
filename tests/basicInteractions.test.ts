import {test , expect} from '@playwright/test'
import { log } from 'console';


test('Interaction with inputs', async ({page}) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
    const messageInput = page.locator("//input[@id='user-message']");
    await messageInput.scrollIntoViewIfNeeded();
   // console.log(await messageInput.getAttribute("placeholder"));
    expect(messageInput).toHaveAttribute("placeholder", "Please enter your Message");
    console.log( "Before entering value" +  await messageInput.inputValue()  );
    await messageInput.type("Hi koushik");
    console.log( "After entering value" +  await messageInput.inputValue()  );
    await page.click("//button[@id='showInput']");
    expect(page.locator("//p[@id='message']")).toContainText('Hi koushik');


    // await page.locator("//input[@id='user-message']").fill("Happy 4th of July");
    // await page.click("//button[@id='showInput']");
    // expect(page.locator("//p[@id='message']")).toContainText('Happy 4th of July');


})


test("Sum", async ({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1input = page.locator('//input[@id="sum1"]');
    const sum2input = page.locator('//input[@id="sum2"]');
    
    const getValuesBtn = page.locator('//button[text()="Get Sum"]');
    let num1 = 123;
    let num2 = 543;
    
    await sum1input.type(num1+"");
    await sum2input.type(num2.toString());
    await getValuesBtn.click();
    const result = page.locator('#addmessage');
    console.log(await result.textContent());
    expect(result).toHaveText((123+543).toString());




})


test.only("Checkbox", async ({page})=> {

    await page.goto('https://www.lambdatest.com/selenium-playground/checkbox-demo');
    const singleCheckbox = await page.locator('#isAgeSelected');
    singleCheckbox.scrollIntoViewIfNeeded();
    expect(singleCheckbox).not.toBeChecked();
    await singleCheckbox.check();
    expect(singleCheckbox).toBeChecked();

})