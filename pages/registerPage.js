const { expect } = require("playwright/test")

exports.registerUser=class registerUser{

    constructor(page){

        this.page=page
        this.gender="//input[@id='gender-male']"
        this.firstName="//input[@id='FirstName']"
        this.lastName="//input[@id='LastName']"
        this.dropDate="//select[@name='DateOfBirthDay']"
        this.dropMonth="//select[@name='DateOfBirthMonth']"
        this.dropYear="//select[@name='DateOfBirthYear']"
        this.email="//input[@id='Email']"
        this.password="//input[@id='Password']"
        this.confirmPassword="//input[@id='ConfirmPassword']"
        this.registerBtn="//button[@id='register-button']"
        this.email_adr='salk@google.com'
        this.password_adr='Sahil@122'

        this.success='//div[@class="result"]'

        this.registerURL="https://demo.nopcommerce.com/register?returnUrl=%2F"
    }


    async goTo(){
        await this.page.goto(this.registerURL)
    }

    
    async registerEachUser(){
        await this.page.locator(this.gender).click()     //clicking male gender
        await this.page.locator(this.firstName).fill('Sahil')
        await this.page.locator(this.lastName).fill('Sengupta')
        await this.page.locator(this.dropDate).selectOption('15')
        await this.page.locator(this.dropMonth).selectOption('December')
        await this.page.locator(this.dropYear).selectOption('1994')
        await this.page.waitForTimeout(5000)
        
        await this.page.locator(this.email).fill(this.email_adr)
        await this.page.locator(this.password).fill(this.password_adr)
        await this.page.locator(this.confirmPassword).fill(this.password_adr)
        await this.page.locator(this.registerBtn).click()
        await expect(this.page.locator(this.success)).toHaveText("Your registration completed")
    }
}