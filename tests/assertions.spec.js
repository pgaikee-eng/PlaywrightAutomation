import  {test,expect}from '@playwright/test'

test('Assertions Demo',async({page}) => {
    await page.goto('https://kitchen.applitools.com/')

    //ASSERTIONS
    //CHECK element present or not  
    await expect(page.locator('text=The kitchen')).toHaveCount(1)
    if(await page.$('text=The kitchen')){
        await page.locator('text=The kitchen').click()

    
    }
    // check element hidden or visiable
    await expect(page.locator('text=The kitchen')).toBeVisible()
    //ait expect.soft(page.locator('text=The kitchen')).toBeHidden()
        // check element enabled or disabled
    await expect(page.locator('text=The kitchen')).toBeEnabled()
    //ait expect.soft(page.locator('text=The kitchen')).toBeDisabled()
    //check text
  //await expect(page.locator('text=The kitchen')).toHaveText('The kitchen')
   //wait expect(page.locator('text=The kitchen')).not.toHaveText('The kitchen')


    //check attribute value
    await expect(page.locator('text=The kitchen')).toHaveAttribute('class',/.*css-dpmy2a/)
    await expect(page.locator('text=The kitchen')).toHaveClass(/.*css-dpmy2a/)
    // check page url and title 
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*kitchen/)
    await page.pause()

    //visual validation with screenshot
    await expect(page).toHaveScreenshot()


}) 
