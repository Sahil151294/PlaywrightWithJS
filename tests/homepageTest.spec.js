import { test, expect } from '@playwright/test';

test('Home Page', async ({page})=> {
    await page.goto('https://www.google.com/');

    const pageTilte = page.title();
    console.log("The title of the page is: ", pageTilte);
    await expect(page).toHaveTitle('Google');

    await expect(page).toHaveURL('https://www.google.com/');

    await page.close();
})