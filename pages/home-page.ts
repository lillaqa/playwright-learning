import { expect, Page, Locator } from '@playwright/test';

export class HomePage {
    //variables
    readonly page: Page;
    readonly productGrid: Locator;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.productGrid = this.page.locator(".col-md-9");
        
    }

    //methods


}

export default HomePage;