const { test, expect } = require('@playwright/test')
const { registerUser } = require('../pages/registerPage')
const { loginUser } = require('../pages/loginPage')
const { zcartUser } = require('../pages/cartPage')


test('@sanityRegister User', async ({ page }) => {

    //register
    const registerUsr=new registerUser(page)

    await registerUsr.goTo()
    await page.waitForTimeout(5000)
    await registerUsr.registerEachUser()

 }) 

 test.skip('Login User', async ({ page }) => {

    //login
    const LoginUsr=new loginUser(page)

    await LoginUsr.goTo()
    await LoginUsr.login()

 })

 test.skip('ZCart Addition', async ({ page }) => {

   const cartUsr=new zcartUser(page)
   //login
   const LoginUsr=new loginUser(page)

   await LoginUsr.goTo()
   await page.waitForTimeout(5000)
   await LoginUsr.login()

   // await cartUsr.goTo()
   await cartUsr.add2Cart()
 })

