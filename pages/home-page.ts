import { expect, Page, Locator } from '@playwright/test';

export class HomePage {
    //variables
    readonly page: Page;
    readonly productGrid: Locator;
    readonly banner: Locator

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.productGrid = this.page.locator(".col-md-9");
        this.banner = this.page.getByRole('img', { name: 'Banner' });
    }

    //methods
    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }

}

export default HomePage;