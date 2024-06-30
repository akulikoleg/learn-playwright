import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
  await page.hover('//*[@id="widget-navbar-217834"]/ul/li[6]/a/div/span');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('koushik350@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Pass123$');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('koushik');
  await page.getByRole('button', { name: 'Continue' }).click();
  
});