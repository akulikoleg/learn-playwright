import {test, expect }  from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homepage"
import SpecialHotPage from "../pages/specialHotPage"

const email = 'aleks123@qwemail.com'
const password = 'aleks123123'

test.describe("Page object test demo", async () => {

    test("Register test _01", async ({page, baseURL}) => {

    
    
        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`);
        await register.enterFirstName('Alex');
        await register.enterLastName('Jameson');
        await register.enterEmail(email);
        await register.enterTelephone('85985658');
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        expect(register.isSubscribeCheck()).toBeTruthy();
        await register.clickTermsAndConditions();
        await register.clickContinueToRegister();    
          
    
    })
    
    test("Login test_02", async ({page, baseURL}) => {
    
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.enterLoginEmail(email);
        await login.enterLoginPassword(password);
        await login.clickLoginBtn();
    
        expect(await page.title()).toBe('My Account');
    
    })
    
    test("Add to cart test_03", async({page, baseURL}) => {
    
        const login = new LoginPage(page);
        const special = new SpecialHotPage(page);
        const homePage = new HomePage(page);
        await page.goto(`${baseURL}route=account/login`);
        await login.login(email, password);
        await homePage.clickOnSpecialHotMenu();
        await special.addFirstProductToTheCart();
        const isCartVisible = await special.isToastVisible();
        expect(isCartVisible).toBeVisible();    
    
    })

})