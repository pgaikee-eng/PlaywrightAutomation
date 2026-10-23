import { test, expect } from '@playwright/test'

test('Demo Login Test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('[placeholder="Enter your username"]').fill('Raghav')
    await page.locator('[placeholder="Enter your password"]').fill('1234')
    await page.locator('text=sign in').click()

})
test.only('Demo Login Test 2', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Wesley Souza' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click()
    



})