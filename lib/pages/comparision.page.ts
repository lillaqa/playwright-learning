import { expect, Page, Locator } from '@playwright/test';

export class ComparisonPage {
    //variables
    readonly page: Page;
    readonly compareButton: Locator;
    readonly homeClearAllButton: Locator;
    readonly compareNowButton: Locator;
    readonly comparisonBar: Locator;
    readonly clearAllButton: Locator;
    readonly showDifferencesCheckbox: Locator;
    readonly removeProductButton: Locator;
   
    //constructors
    constructor(page) {
        this.page = page;
        this.compareButton = page.getByRole('button', { name: 'Compare' });
        this.comparisonBar = page.getByTestId('comparison-bar');
        this.homeClearAllButton = page.getByRole('button', { name: 'Clear All' });
        this.compareNowButton = page.getByRole('button', { name: 'Compare Now' });
        this.clearAllButton = page.getByRole('button', { name: 'Clear All' });
        this.showDifferencesCheckbox = page.getByTestId('show-differences');
        this.removeProductButton = page.getByRole('button', { name: 'Remove Product' });
    }

    //methods

}

export default ComparisonPage;


/*
await page.goto('https://practicesoftwaretesting.com/');
await page.getByTestId('product-01KPGRJEZF6YSZRRQBEC6M57X2').getByTestId('compare-btn').click();
await page.getByTestId('product-01KPGRJEZNJNP9GY1AA6KBQ38Z').getByTestId('compare-btn').click();
await page.getByTestId('compare-link').click();
*/