import {test, expect} from '@playwright/test';
import ComparisonPage from '@pages/comparision.page';

let comparisonPage: ComparisonPage;

test.beforeEach(async ({ page }) => {
    comparisonPage = new ComparisonPage(page);
    await page.goto('https://practicesoftwaretesting.com/');
});

test.describe('Home page buttons function as expected', () => {
    test('Compare button selects the product', async () => {
        await comparisonPage.compareButton.nth(0).click();
        await expect(comparisonPage.compareButton.nth(0)).toHaveAttribute('aria-pressed', 'true');
        await expect(comparisonPage.comparisonBar).toBeVisible();
        await comparisonPage.compareButton.nth(1).click();
        await expect(comparisonPage.compareButton.nth(1)).toHaveAttribute('aria-pressed', 'true');
    });

    test('Clear All button clears the selected products', async () => {
        await comparisonPage.compareButton.nth(0).click();
        await comparisonPage.compareButton.nth(1).click();
        await comparisonPage.homeClearAllButton.click();
        await expect(comparisonPage.compareButton.nth(0)).toHaveAttribute('aria-pressed', 'false');
        await expect(comparisonPage.compareButton.nth(1)).toHaveAttribute('aria-pressed', 'false');
    });

});

