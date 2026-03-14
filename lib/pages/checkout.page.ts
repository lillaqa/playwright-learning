import { expect, Page, Locator } from '@playwright/test';

export class CheckoutPage {
    //variables
    readonly page: Page;
    readonly proceedButton: Locator;


    //constructors 
    constructor(page: Page) {
        this.page = page;
        this.proceedButton = page.getByRole('button', { name: "Proceed to checkout"});
    }


    //methods
}

export default CheckoutPage;