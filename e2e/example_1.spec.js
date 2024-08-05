import { test, expect } from '@playwright/test';

test('Home Page', async ({page})=> {
    
    await page.goto('https://demoqa.com/elements');

    const pageTilte = await page.title();
    console.log("The title of the page is: ", pageTilte);
    await expect(page).toHaveTitle('DEMOQA');

    await page.locator("//*[local-name()='svg']").click()

//     await expect(page).toHaveURL('https://www.google.com/');

    //  await page.close();
})
