import {Page} from '@playwright/test'

export default class LoginPage{

    constructor(public page: Page){}

    async login(email, password){

        await this.enterLoginEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();

    }

    async enterLoginEmail(email: string){
        await this.page.locator('#input-email')
                        .type(email);//james123@gmail.com

    }

    async enterLoginPassword(password: string){
        await this.page.locator('#input-password')
                        .type(password);//james123

    }

    async clickLoginBtn(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil:'load'}),
            this.page.click('//input[@value="Login"]')

        ]) 
    }
}