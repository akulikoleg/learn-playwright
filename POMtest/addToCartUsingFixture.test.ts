import { test, expect }  from "../base/pomFixture";
import * as data from "../test-data/addTocart-test-data.json";


// test.use({  
//     browserName: "firefox"
//   })

test.describe("Page object test demo", async () => {
  

    test("Register test _01", async ({page, baseURL, registerPage}) => {
       
        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstName(data.firstname);
        await registerPage.enterLastName(data.lastname);
        await registerPage.enterEmail(data.email);
        await registerPage.enterTelephone(data.phonenumber);
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        expect(registerPage.isSubscribeCheck()).toBeTruthy();
        await registerPage.clickTermsAndConditions();
        await registerPage.clickContinueToRegister();    
         
    })
    
    test("Login test_02", async ({page, baseURL, loginPage}) => {
    
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.enterLoginEmail(data.email);
        await loginPage.enterLoginPassword(data.password);
        await loginPage.clickLoginBtn();
    
        expect(await page.title()).toBe('My Account');
    
    })
    
    test("Add to cart test_03", async({page, baseURL, loginPage, homePage, specialPage}) => {
    
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(data.email, data.password);
        await homePage.clickOnSpecialHotMenu();
        await specialPage.addFirstProductToTheCart();
        const isCartVisible = await specialPage.isToastVisible();
        expect(isCartVisible).toBeVisible();    
    
    })

})