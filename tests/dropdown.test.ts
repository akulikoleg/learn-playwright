import {test, expect} from '@playwright/test'

test("handling dropdown", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("//*[@id=\"select-demo\"]", {
        index: 5
    });

    await page.waitForTimeout(3000);
    expect(page.locator('//p[@class="selected-value text-size-14"]')).toContainText('Thursday');

    const selectedStates = await page.selectOption('#multi-select', [{value: "Florida"}, {label: 'Ohio'}, {label: 'Texas'}]);
    expect(selectedStates).toEqual(['Florida', 'Ohio', 'Texas']);

})


test.only("Bootstrap dropdown", async ({page}) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await selectCountry('Denmark');
    await selectCountry('India');
    await selectCountry('South Africa');

      
    await page.waitForTimeout(3000);   


    async function selectCountry(contryName){

        await page.click('#country+span');
        await page.locator('#select2-country-results').locator('li',{ hasText: contryName }).click();


    }



})