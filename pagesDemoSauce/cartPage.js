const { expect } = require("playwright/test")

exports.zcartUser
=class zcartUser{

    constructor(page){

        this.page=page
        this.elctronicsPage="//img[@title='Show products in category Electronics']"
        this.cameraPhotos="//img[@title='Show products in category Camera & photo']"
        this.cameraSelected="//h2[@class='product-title']//a[contains(text(),'Nikon D5500 DSLR')]"
        this.add2CartBtn="//button[@id='add-to-cart-button-14']"
        this.verifyCartAddition="//p[@class='content']"
        this.homepage="//img[@alt='nopCommerce demo store']"

        this.loginURL="https://demo.nopcommerce.com/login?returnUrl=%2F"
    }

    async goTo(){
        await this.page.goto(this.loginURL)
    }

    
    async add2Cart(){

        await this.page.locator(this.elctronicsPage).click()     
        await this.page.locator(this.cameraPhotos).click()
        await this.page.locator(this.cameraSelected).click()
        await this.page.locator(this.add2CartBtn).click()
        await expect(this.page.locator(this.verifyCartAddition)).toHaveText("The product has been added to your shopping cart")
    }
}