import { test, expect } from '@playwright/test';
import HomePage from '@pages/home.page';

let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    //await page.goto('https://practicesoftwaretesting.com/');
    homePage = new HomePage(page);
    await homePage.goto();
});

test.describe('Validate home page header', () => {
    test("Validate title", async ({ page }) => {
        await expect(page.getByTitle('Practice Software Testing - Toolshop - v5.0')).toBeVisible();
    });

    //SVG logo, the test needs to be upgraded
    test("Validate logo", async ({ page }) => {
        await expect(page.getByRole('link', { name: 'Practice Software Testing -' })).toBeVisible();
    });

    test("Validate sign in", async ({ page }) => {
        await expect(page.getByTestId('nav-sign-in')).toHaveText('Sign in');
    });

    test('Validate banner', async ({ page }) => {
        await expect(homePage.banner).toBeVisible();
    });
});

test.describe('Validate home page main sections', () => {


    test("Validate product grid", async ({ page }) => {
        await expect(homePage.productGrid.getByRole('link')).toHaveCount(9);
        //value alternative
        //expect(await productGrid.getByRole('link').count()).toBe(9);
    });

    test('Validate search', async ({ page }) => {
        await page.getByPlaceholder('Search for products').fill('Thor Hammer');
        await page.getByRole('button', { name: 'Search' }).click();
        await expect(homePage.productGrid.getByRole('link')).toHaveCount(1);
    });

});

test.describe('Validate sidebar', () => {
    test('Validate sidebar headingtexts', async ({ page }) => {
        await expect(page.getByRole('heading', { name: 'Sort' })).toHaveText('Sort');
        await expect(page.getByRole('heading', { name: 'Price Range' })).toHaveText('Price Range');
        await expect(page.getByRole('heading', { name: 'Search' })).toHaveText('Search');
        await expect(page.getByRole('heading', { name: 'Filters' })).toHaveText('Filters');
        await expect(page.getByRole('heading', { name: 'By category:' })).toHaveText('By category:');
        await expect(page.getByRole('heading', { name: 'By brand:'})).toHaveText('By brand:');
        await expect(page.getByRole('heading', { name: 'Sustainability:'})).toHaveText('Sustainability:');
    });


});