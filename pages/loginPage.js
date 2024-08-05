exports.loginUser
=class loginUser{

    constructor(page){

        this.page=page
        this.email="//input[@id='Email']"
        this.password="//input[@id='Password']"
        this.remeberMe="//input[@id='RememberMe']"
        this.loginBtn="//button[normalize-space()='Log in']"
        this.email_adr='salk@google.com'
        this.password_adr='Sahil@122'

        this.loginURL="https://demo.nopcommerce.com/login?returnUrl=%2F"
    }

    async goTo(){
        await this.page.goto(this.loginURL)
    }

    
    async login(){
        await this.page.locator(this.email).fill(this.email_adr)     
        await this.page.locator(this.password).fill(this.password_adr)
        await this.page.locator(this.remeberMe).check()
        await this.page.locator(this.loginBtn).click()
    }
}