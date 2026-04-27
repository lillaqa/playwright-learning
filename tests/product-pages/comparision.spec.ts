import {test, expect} from '@playwright/test';
import ComparisonPage from '@pages/comparision.page';

let comparisonPage: ComparisonPage;

test.beforeEach(async ({ page }) => {
    comparisonPage = new ComparisonPage(page);
    await page.goto('https://practicesoftwaretesting.com/');
});

test.describe('Home page buttons function as expected', () => {
    test('Verify that comparison related UI elements are visible on the home page', async ({ page }) => {
        await comparisonPage.compareButton.nth(0).click();
        await expect(comparisonPage.comparisonBar).toBeVisible();
        await expect(comparisonPage.compareNowButton).toBeVisible();
        await expect(comparisonPage.homeClearAllButton).toBeVisible();
        await expect(page.getByText('1 product(s) selected')).toBeVisible(); 
    });

    test('Compare button selects the product', async ({ page }) => {
        await comparisonPage.compareButton.nth(0).click();
        await expect(comparisonPage.compareButton.nth(0)).toHaveAttribute('aria-pressed', 'true');
        await expect(comparisonPage.comparisonBar).toBeVisible();
        await expect(page.getByText('1 product(s) selected')).toBeVisible();
        await comparisonPage.compareButton.nth(1).click();
        await expect(comparisonPage.compareButton.nth(1)).toHaveAttribute('aria-pressed', 'true');
        await expect(page.getByText('2 product(s) selected')).toBeVisible();
    });

    test('Clear All button clears the selected products', async ({ page }) => {
        await comparisonPage.compareButton.nth(0).click();
        await expect(comparisonPage.compareButton.nth(0)).toHaveAttribute('aria-pressed', 'true');
        await comparisonPage.compareButton.nth(1).click();
        await comparisonPage.homeClearAllButton.click();
        await expect(comparisonPage.compareButton.nth(0)).toHaveAttribute('aria-pressed', 'false');
        await expect(comparisonPage.compareButton.nth(1)).toHaveAttribute('aria-pressed', 'false');
    });

    test('Compare Now button navigates to the comparison page', async ({ page }) => {
        await comparisonPage.compareButton.nth(0).click();
        await comparisonPage.compareButton.nth(1).click();
        await comparisonPage.compareNowButton.click();
        await expect(page).toHaveURL('/comparison');
    });

});

