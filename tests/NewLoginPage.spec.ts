import {test, expect}from '@playwright/test';
test('New Login Page ', async ({page})=> {
    // go to login page
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page.getByRole('img', {name:'OrangeHRM'})).toBeVisible()
    //login to application
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible();
    await page.getByRole('link',{name:'PIM'}).click();
    await expect(page.getByRole('heading',{name:'PIM'})).toBeVisible();
    //add new employee
    await page.getByRole('button',{name:'Add'}).click();
    await page.getByPlaceholder('First Name').fill('Kalpesh');
    await page.getByPlaceholder('Middle Name').fill('Bhart');
    await page.getByPlaceholder('Last Name').fill('Parmar');
    const employeeID= page.locator('.oxd-input-group')
    .filter({has:page.locator('label',{hasTest:'Employee ID'})})
    .locator('.oxd-input.oxd-input--active')
}) 