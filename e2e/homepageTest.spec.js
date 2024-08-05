// very first playwright testcase
import { test, expect } from '@playwright/test';

// test('Home Page', async ({page})=> {
//     await page.goto('https://www.google.com/');

//     const pageTilte = await page.title();
//     console.log("The title of the page is: ", pageTilte);
//     await expect(page).toHaveTitle('Google');

//     await expect(page).toHaveURL('https://www.google.com/');

//     await page.close();
// })


test('Locators Example', async ({page})=> {
    await page.goto('https://demoblaze.com/');

    // clicking on login button using --property
    await page.click('id=login2')

    // provide username --CSS
    // await page.locator('#loginusername').fill("pavanol")
    await page.fill('#loginusername', "pavanol")

    // provide password
    await page.fill("input[id='loginpassword']", 'test@123')

    // clicking on login
    await page.click("//button[normalize-space()='Log in']")

    // verifying logout button presence
    const logout_btn= await page.locator("//a[@id='logout2']")
    await expect(logout_btn).toBeVisible()

    await page.close()
})