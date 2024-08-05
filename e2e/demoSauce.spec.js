const { test, expect } = require('@playwright/test')
const { loginUser } = require('../pagesDemoSauce/loginPage')




 test.skip('Login User with Standard User', async ({ page }) => {

    //login
    const LoginUsr=new loginUser(page)

    await LoginUsr.goTo()
    await LoginUsr.login('standard_user', 'demo_sauce')
    await expect(page.locator("//div[@class='app_logo']")).toContainText("Swag Labs")

 })


 test.skip('Login User with Invalid User', async ({ page }) => {

   //login
   const LoginUsr=new loginUser(page)

   await LoginUsr.goTo()
   await LoginUsr.login('inv_user', 'demo_sauce')
   expect(page.locator("//h3[@data-test='error']")).toContainText("Username and password do not match")
})



test('Login User without Username Password', async ({ page }) => {

   //login
   const LoginUsr=new loginUser(page)

   await LoginUsr.goTo()
   await LoginUsr.login_no_user_password()
   expect(page.locator("h3[data-test='error']")).toContainText('Username is required')

})