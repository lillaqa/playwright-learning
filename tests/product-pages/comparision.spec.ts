import {test, expect} from '@playwright/test';
import ComparisionPage from '@pages/comparision.page';

let comparisionPage: ComparisionPage;

test.beforeEach(async ({ page }) => {
    comparisionPage = new ComparisionPage(page);
    await page.goto('https://practicesoftwaretesting.com/');
});

test.describe('Home page buttons function as expected', () => {
    test('Compare button selects the product', async () => {
        await comparisionPage.compareButton.nth(0).click();
        await expect(comparisionPage.compareButton.nth(0)).toHaveAttribute('aria-pressed', 'true');
    });

});

