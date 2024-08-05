// Example for how to use Built-in Locators
import { test, expect } from '@playwright/test';

test('Home Page', async ({page})=> {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // this gets the image with alt tag as 'company-branding'
    const logo= page.getByAltText('company-branding')
    await expect(logo).toBeVisible()

    // using placeholder attribute, specially in input boxes
    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('password').fill('admin123')

    // using by role attribute, 
    await page.getByRole("button", {type: 'submit'}).click()

    // to locate any element with inner text
    const time_at_work= await page.locator("//p[normalize-space()='Time at Work']").textContent()
    await expect(page.getByText(time_at_work)).toBeVisible()


    page.close()
 })