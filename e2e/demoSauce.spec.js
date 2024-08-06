const { test, expect } = require('@playwright/test')
const { loginUser } = require('../pagesDemoSauce/loginPage')




 test.skip('Login User with Standard User', async ({ page }) => {

    //this case checks for normal positive login scenarios
    const LoginUsr=new loginUser(page)

    await LoginUsr.goTo()
    await LoginUsr.login('standard_user', 'secret_sauce')
    await expect(page.locator("//div[@class='app_logo']")).toContainText("Swag Labs")

})


test('Login User with Performance glitch User', async ({ page }) => {

   //this case checks for performance glitch positive login scenario
   //here the login happens a little late and page buffers
   const LoginUsr=new loginUser(page)

   await LoginUsr.goTo()
   await LoginUsr.login('standard_user', 'secret_sauce')
   await expect(page.locator("//div[@class='app_logo']")).toContainText("Swag Labs")

})

test.skip('Login User with Locked Out User', async ({ page }) => {

   //this case checks for locked out user negetive login scenarios
   const LoginUsr=new loginUser(page)

   await LoginUsr.goTo()
   await LoginUsr.login('locked_out_user', 'secret_sauce')
   expect(page.locator("//h3[@data-test='error']")).toContainText("Sorry, this user has been locked out.")

})


test.skip('Login User with Invalid User', async ({ page }) => {

   //this case checks invalid username login failure message
   const LoginUsr=new loginUser(page)

   await LoginUsr.goTo()
   await LoginUsr.login('inv_user', 'demo_sauce')
   expect(page.locator("//h3[@data-test='error']")).toContainText("Username and password do not match")
})



test.skip('Login User without Username Password', async ({ page }) => {

   //this case checks no username login failure message
   const LoginUsr=new loginUser(page)

   await LoginUsr.goTo()
   await LoginUsr.login_no_user_password()
   expect(page.locator("h3[data-test='error']")).toContainText('Username is required')

})