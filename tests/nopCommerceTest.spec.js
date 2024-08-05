const { test, expect } = require('@playwright/test')//import
import { registerUser } from './pages/registerUser'


test('Register User', async ({ page }) => {

    //register
    const registerUsr=new registerUser(page)

    await registerUsr.moveToRegister()
    await page.waitForTimeout(2000)
    await registerUsr.registerEachUser()

 }) 



