exports.cartUser
=class cartUser{

    constructor(page){

        this.page=page
        this.cartItem="//div[@class='cart_item']"
       
    }
    
    async itemsInCart(cartLink){
        await this.page.locator(cartLink).click()    
        let cart_elements = await page.$$("//div[@class='inventory_item_name']")
        
        await this.page.waitForTimeout(2000)
        return(cart_elements)
    }

}