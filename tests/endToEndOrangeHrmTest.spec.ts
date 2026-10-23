import {expect, test} from '@playwright/test'

test('end to end Orange HRM test', async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await expect(page.locator('img[alt="company-branding"]')).toBeVisible();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByRole('textbox', {name: 'Password'}).fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page.getByRole('heading', {name:'Dashboard'})).toBeVisible();
    await page.getByRole('link', {name: 'PIM'}).click();
    await expect(page.getByRole('heading', {name:'PIM', exact:true})).toBeVisible();
    //Add New Employee

    await page.getByRole('button', {name:'Add'}).click();
    await expect(page.getByLabel('Empolyee Full Name')).toBeVisible();
    await page.getByRole('textbox',{name:'First Name'}).fill('Jitesh');
    await page.getByPlaceholder('Last Name').fill('Verma');

    const employeeID = page.locator('.oxd-input-group').filter({has:page.locator('label',{hasText:'Employee ID'})})
    .locator('.oxd-input.oxd-input--active') 

    const employeeIdValue= await employeeID.inputValue();
    console.log("Auto Generated EMID:", employeeIdValue);
    await page.getByRole('button',{name:'save'}).click();
    await expect(page.getByRole('heading',{name:'Personal Details'})).toBeVisible();

    await page.getByRole('link',{name:'PIM'}).click();
    await employeeID.fill(employeeIdValue);
    await page.getByRole('button',{name:'search'}).click();
    await page.locator('oxd-table-card').filter({hasText:employeeIdValue});
    await expect(employee).toBeVisible();
    await employeeID.click();
    await expect(page.getByRole('heading',{name:'Personal Details'})).toBeVisible();

    await page.locator('.oxd-input-group').filter({has:page.locator('label',{hasText:"Driver's license Number"})})
    .locator('.oxd-input.oxd-input--active').fill("DL123456");
    
    await page.locator('.oxd-input-group').filter({has:page.locator('label',{hasText:"license Expiry Date"})})
    .getByPlaceholder('yyyy-dd-mm').fill('2025-31-12');

    //Alternate approach to handle the calendar

    const calendar = page.locator('.oxd-input-group').filter({has:page.locator('label',{hasText:"Date of Birth"})})
    .getByPlaceholder('yyyy-dd-mm')

    await calendar.click();
    const year ='1997'
    const month  ='jan'
    const day ='22'

    const calenarDropdown =page.locator('.oxd-date-input-calendar')
     
    await calenarDropdown.waitFor({state:'visible',timeout:15000});
    await calenarDropdown.getByText('2026',{exact: true}).click();
    await calenarDropdown.getByText('year').click();
    await calenarDropdown.getByText('july',{exact:true}).click();
    await calenarDropdown.getByText(month).click();
    await calenarDropdown.getByText(day).click();
    await expect(calendar).toHaveValue('1997-22-01');










})