import {test as myTest} from '@playwright/test';

type koushik = {
    age: number,
    email: string
}

 const myFixtureTest =  myTest.extend<koushik>({
    age: 27, 
    email: 'koushui@mdf.ru'
})

export const test = myFixtureTest;
