import{test, expect} from '@playwright/test'

test('selectors demo', async ({page}) => {

    await page.goto('https://www.saucedemo.com/')
    await page.pause
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Edison')
    //using css selector
    //#login-button
    await page.locator('#login-button').click()
    //using Xpath
    await page.locator('xpath=//input[@id="user-name"]').fill('faraday')
    await page.locator('//input[@id="user-name"]').fill('Ramanujan')
    //using text
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()

});