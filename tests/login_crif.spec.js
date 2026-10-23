

import{ test, expect } from '@playwright/test';
test ('CRIF Login test', async ({page}) =>{
    await page.goto ('https://cir.crifhighmark.com/personal-credit-report/personal');
    await page.getByText('Login').click();
    await page.locator('.d-flex').count();
   await page.locator('[formcontrolname="email"]')
    .fill('pgaikee@gmail.com');;
   const password = page.locator('[formcontrolname="password"]');
await password.click();
await password.fill('Pulu@12#08$');
   await page.getByRole('button', { name: 'Continue' }).click();
   await expect(page.getByLabel('OTP')).toBeVisible();
   await page.pause();
   await page.waitForTimeout(60000);
   await page.getByRole('button', { name: /verify/i }).click();
});