import { test, expect } from '@playwright/test';
import HomePage from '@pages/home.page';
import { generateRandomString } from '@helpers/randomText';
import { pickRandomProduct } from '@helpers/productsArray';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
});

test.describe('Sorting products', () => {});

test.describe('Filtering products category', () => {});

test.describe('Filtering products price', () => {});

test.describe('Searching products', () => {
    test('Check more than one products found', async ({ page }) => {
        const searchTerm = pickRandomProduct();
        await homePage.searchForText.fill(searchTerm);
        await homePage.submitSearch();
        //page.waitForTimeout(200);
        await expect(homePage.productGrid.getByRole('link')).not.toHaveCount(0);

        // 1. Get the locator for ALL titles
        const productTitles = homePage.page.locator('.card-title');

        // 2. IMPORTANT: Wait for the collection to be "Stable"
        // This ensures Playwright doesn't start the loop while the items are still loading
        await expect(productTitles.first()).toBeVisible();

        // 3. Use map() or a 'for...of' loop on the actual elements
        // This is faster and avoids the "nth(i)" re-selection lag
        const allTexts = await productTitles.allTextContents();

        for (const text of allTexts) {
            // Now we check the strings directly, which is instant
            expect(text.toLowerCase()).toContain(searchTerm.toLowerCase());
        }

        // Verify every single title in that locator list contains the term
        // const count = await productTitles.count();
        // for (let i = 0; i < count; i++) {
        //     await expect(productTitles.nth(i)).toContainText(searchTerm, { ignoreCase: true });
        // }

        //await expect(homePage.searchResult).toHaveCount(1);
    });

    test('Check no result found', async ({ page }) => {
        const junkInput = generateRandomString(13);
        await homePage.searchForText.fill(junkInput);
        await homePage.submitSearch();
        page.waitForTimeout(200);
        await expect(homePage.productGrid.getByRole('link')).toHaveCount(0);
        await expect(page.locator('[data-test="no-results"]')).toHaveText('There are no products found.');
    });
});

test.describe('Pagination', () => {

    test('Check that pagination is visible and has correct text', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Previous' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Previous' })).toHaveText('«');
        await expect(page.getByRole('button', { name: 'Next' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Next' })).toHaveText('»');
        await expect(page.getByRole('button', { name: 'Page-1' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Page-2' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Page-3' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Page-4' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Page-5' })).toBeVisible();
    });

    test('Check that pagination buttons function properly', async ({ page }) => {
    });

    //seeingly redundant test, but i need to double check in the project docs first
    // test('Verfiy arrow buttons are disabled on first and last page', async ({ page }) => {
    //     await page.getByRole('button', { name: 'Page-5' }).click();
    //     await expect(page.getByRole('button', { name: 'Next' })).toBeDisabled();
    //     await page.getByRole('button', { name: 'Page-1' }).click();
    //     await expect(page.getByRole('button', { name: 'Previous' })).toBeDisabled();
    // });
});