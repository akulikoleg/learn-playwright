import {Page} from '@playwright/test'

export default class RegisterPage{

    constructor(public page: Page){
     
    }
    async enterFirstName(firstname: string){
        await this.page.locator('//input[@name="firstname"]')
                        .type(firstname);

    }
    async enterLastName(lastname: string){        await this.page.locator('//input[@name="lastname"]')
                        .type(lastname);

    }
    async enterEmail(email: string){
        await this.page.locator('//input[@name="email"]')
                        .type(email);

    }
    async enterTelephone(phone: string){
        await this.page.locator('#input-telephone')
                        .type(phone);

    }
    async enterPassword(password: string){
        await this.page.locator('#input-password')
                        .type(password);

    }
    async enterConfirmPassword(password: string){
        await this.page.locator('#input-confirm')
                        .type(password);

    }
    async isSubscribeCheck(){
        await this.page.locator('#input-newsletter-no').isChecked();

    }
    async clickTermsAndConditions(){
        await this.page.locator('//*[@for="input-agree"]').click()

    }
    async clickContinueToRegister(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            this.page.click('//input[@type="submit"]')
        ])
        
    }


}