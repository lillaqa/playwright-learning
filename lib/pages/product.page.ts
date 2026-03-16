import { expect, Page, Locator } from '@playwright/test';

export class ProductPage {
    //variables
    readonly page: Page;
    readonly addToCart: Locator;
    readonly cartQuantity: Locator;
    
    //constructors 
    constructor(page: Page) {
        this.page = page;
        this.addToCart = page.getByRole('button', {name: 'Add to cart'});
        this.cartQuantity = page.locator('[data-test="cart-quantity"]');
    }


    //methods
}

export default ProductPage;