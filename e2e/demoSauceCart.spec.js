const { test, expect } = require('@playwright/test')
const { loginUser } = require('../pagesDemoSauce/loginPage')
const { cartUser } = require('../pagesDemoSauce/cartPage')



test('Checking numnber of Items in Cart', async ({ page }) => {

    //this case checks for number of items added to the cart.
    const LoginUsr=new loginUser(page)
    const CartUsr=new cartUser(page)

    await LoginUsr.goTo()
    await LoginUsr.login('standard_user', 'secret_sauce')

    const cart_link = "//a[@class='shopping_cart_link']"
    let cart_elements = CartUsr.itemsInCart(cart_link)
    console.log("No. of elements in cart is ", cart_elements.length)

})


test('Items addition to cart', async ({ page }) => {

    //this case adds items to the cart
    const LoginUsr=new loginUser(page)
    

    await LoginUsr.goTo()
    await LoginUsr.login('standard_user', 'secret_sauce')

    // finding multiple elements to add to cart
    for(const li of await page.locator("//div[@class='inventory_item']/div[2]/div/button").all())
        await li.click()
        await page.waitForTimeout(500)

})

