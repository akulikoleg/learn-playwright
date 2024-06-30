import {test, expect} from "@playwright/test"

test("Interact with frames", async ({page}) => {

    await page.goto("https://letcode.in/frame");
    const allframes = page.frames();
    console.log("No. of frames:" + allframes.length);
    
    const frame = page.frameLocator('#firstFr');
    await frame.locator('//input[@name="fname"]').fill('Oleg');
    await frame.locator('//input[@name="lname"]').fill('Aculov');
    expect(await frame?.locator('//p[@class="title has-text-info"]').textContent()).toContain('You have entered');



    const innerframe = frame.frameLocator('//*[@src="innerFrame"]');
    const inputEmail = innerframe.locator('//input[@name="email"]');
    await inputEmail.fill('oacusdflov@gmail.com');

    // const myFrame = page.frame('firstFr');
    // await myFrame?.fill('//input[@name="fname"]', 'Oleg');
    // await myFrame?.fill('//input[@name="lname"]', 'Aculov');
    // expect(await myFrame?.locator('//p[@class="title has-text-info"]').textContent()).toContain('You have entered');

    await page.waitForTimeout(3000);


})