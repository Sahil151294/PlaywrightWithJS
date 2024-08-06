exports.loginUser
=class loginUser{

    constructor(page){

        this.page=page
        this.username="//input[@id='user-name']"
        this.password="//input[@id='password']"
        this.loginBtn="//input[@id='login-button']"
        this.standard_user='standard_user'
        this.password_adr='secret_sauce'
        this.cart_logo='//div[@class="app_logo"]'

        this.loginURL="https://www.saucedemo.com/"
    }

    async goTo(){
        await this.page.goto(this.loginURL)
        await this.page.waitForTimeout(500)
    }

    
    async login(username, password){
        await this.page.locator(this.username).fill(username)     
        await this.page.locator(this.password).fill(password)
        await this.page.locator(this.loginBtn).click()
        await this.page.waitForTimeout(2000)
    }


    async login_no_user_password(){
        await this.page.locator(this.loginBtn).click()
    }
}