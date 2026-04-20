import { expect, Page, Locator } from '@playwright/test';

export class ComparisionPage {
    //variables
    readonly page: Page;
    readonly compareButton: Locator;
    readonly homeClearAllButton: Locator;
    readonly homeCompareButton: Locator;
    readonly compareClearAllButton: Locator;
    readonly showDifferencesCheckbox: Locator;
    readonly removeProductButton: Locator;
   
    //constructors
    constructor(page) {
        this.page = page;
        this.compareButton = page.getByRole('button', { name: 'Compare' });

    }

    //methods

}

export default ComparisionPage;


/*
await page.goto('https://practicesoftwaretesting.com/');
await page.getByTestId('product-01KPGRJEZF6YSZRRQBEC6M57X2').getByTestId('compare-btn').click();
await page.getByTestId('product-01KPGRJEZNJNP9GY1AA6KBQ38Z').getByTestId('compare-btn').click();
await page.getByTestId('compare-link').click();
*/