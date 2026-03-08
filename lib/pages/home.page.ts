import { expect, Page, Locator } from '@playwright/test';

class PriceSlider {
    readonly page: Page;
    readonly container: Locator;
    readonly minPointer: Locator;
    readonly maxPointer: Locator;
    readonly currentMinLabel: Locator;
    readonly currentMaxLabel: Locator;
    readonly floorLabel: Locator;
    readonly ceilLabel: Locator;

    constructor(page) {
        this.page = page;
        this.container = page.locator('.ngx-slider'); // The main wrapper
        this.minPointer = page.getByRole('slider', { name: 'ngx-slider', exact: true });
        this.maxPointer = page.getByRole('slider', { name: 'ngx-slider-max' });
        
        // These are the "Current Value" labels above the dots
        this.currentMinLabel = this.container.locator('.ngx-slider-model-value');
        this.currentMaxLabel = this.container.locator('.ngx-slider-model-high');
        
        // The static floor/ceil labels at the far ends
        this.floorLabel = this.container.locator('.ngx-slider-floor');
        this.ceilLabel = this.container.locator('.ngx-slider-ceil');
    }

    async getValues() {
        return {
            min: await this.currentMinLabel.innerText(),
            max: await this.currentMaxLabel.innerText()
        };
    }
}

export class HomePage {
    //variables
    readonly page: Page;
    readonly productGrid: Locator;
    readonly banner: Locator;
    readonly priceSlider: PriceSlider;

    //constructor
    constructor(page: Page) {
        this.page = page;
        this.productGrid = this.page.locator(".col-md-9");
        this.banner = this.page.getByRole('img', { name: 'Banner' });
        this.priceSlider = new PriceSlider(page);
    }

    //methods
    async goto() {
        await this.page.goto('https://practicesoftwaretesting.com/');
    }

}

export default HomePage;
